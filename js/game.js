'use strict';

class Game {
    constructor(options, gameOver, gameWon) {
        this.ctx = options.ctx;
        this.chef = options.chef;
        this.ingredients = options.ingredients;
        this.ingredienToPrint = [];
        this.pickedIngredients = [];
        this.knife = dataKnifes;
        this.knifesToPrint = [];
        this.gameOver = gameOver;
        this.gameWon = gameWon;
        this.background = new Image();
        this.timeLeft = undefined;
        this.knivesID = undefined;
        this.countDownID = undefined;
    }

    _drawBackground () {
        this.background.src = "img/canvas-background.jpg";
        this.ctx.drawImage(
            this.background,
            0,
            0,
            500,
            500
        )
    }

    _generateIngredient() {
        this.ingredienToPrint.unshift(this.ingredients.list[0]);
        this.ingredients.list.splice(0,1);
    }

    _drawIngredient() {
        this.ingredients.imageIngredient.src = this.ingredienToPrint[0].img;
        this.ctx.drawImage(
            this.ingredients.imageIngredient,
            this.ingredienToPrint[0].x,
            this.ingredienToPrint[0].y,
            this.ingredienToPrint[0].width,
            this.ingredienToPrint[0].height,
        );
    }

    _generateKnife() {   
        let newKnife = this.knife[Math.floor(Math.random() * (this.knife.length))];
        this.knifesToPrint.push(newKnife);
    }

    _renderIngredients() {
        let list = document.getElementById("list");
        list.innerHTML = "";
       
        let totalIngredients = document.createElement("p");
        totalIngredients.innerHTML =`You still need to pick up ${this.ingredients.list.length} ingredients`;
        list.appendChild(totalIngredients);

        this.pickedIngredients.forEach((item) => {
            let newItem = document.createElement("li");
            newItem.innerHTML =`<span>${item.name}</span> was added to your basket`;
            list.appendChild(newItem);
        })
    }
    
    _assignControlsToKeys() {
        document.addEventListener("keydown", (event) => {
            //As the player moves the Chef it's initial position gets updated & printed again
            switch (event.code) {
                case "ArrowUp":
                    this.chef.goUp();
                    break;
                case "ArrowDown":
                    this.chef.goDown();
                    break;
                case "ArrowLeft":
                   this.chef.goLeft();
                    break;
                case "ArrowRight":
                   this.chef.goRight();
                    break;
                default:
                    break;
            }
        })
    }

    _clean() {
        this.ctx.clearRect(0,0, 500, 500);
    }

    _restoreDOMIngredientsList() {
        let list = document.getElementById("list");
        list.innerHTML = "";

        let liItem = document.createElement("li");
        liItem.innerHTML =`Your shopping basket is empty...`;
        list.appendChild(liItem);
    }

    _startTimer() {
        this.timeLeft = 60;

        this.countDownID = setInterval(()=>{
            document.getElementById("timer__p").innerHTML = `${this.timeLeft} seconds remaining`;
            this.timeLeft -=1;

            if (this.timeLeft < 10) {
                document.getElementById("timer").style = "border: 0.3em solid #ff3b3b;";
                document.getElementById("timer__p").style = `color: #ff3b3b;`;
            } 
            if(this.timeLeft === -2) {
                clearInterval(this.countDownID);
                document.getElementById("timer__p").innerHTML = `60 seconds remaining`;
                this.gameOver();
            }
        },1000);
    }

    _update() {
        this._clean();
        this._drawBackground();
        this.chef._draw(this.ctx);
        this._drawIngredient();

        //Taking ingredients
        if (this.chef.collidesWithObject(this.chef.currentPosition, this.ingredienToPrint[0])) {
            this.pickedIngredients.push(this.ingredienToPrint[0]);
            this._renderIngredients();
            this._generateIngredient();
            this.chef.scoreUp();
        }

        //If the player has take all the ingredients needed > Game Won
        if(this.pickedIngredients.length === 10) {
            clearInterval(this.knivesID);
            clearInterval(this.countDownID);
            this._clean();
            this._restoreDOMIngredientsList()
            this.gameWon();
            return
        }

        //Knifes
        this.knifesToPrint.forEach(knife => {
            knife._draw(this.ctx);
        });    

        //Colliding with knifes
        for(let i= 0; i< this.knifesToPrint.length; i++) {
            if(this.chef.collidesWithObject(this.chef.currentPosition,this.knifesToPrint[i])) {
                clearInterval(this.knivesID);
                clearInterval(this.countDownID);
                this._clean();
                this._restoreDOMIngredientsList()
                this.gameOver();
                return
            }
        }
        window.requestAnimationFrame(this._update.bind(this));
    }

    _start() {
       this._startTimer();
       this._drawBackground();
       this._assignControlsToKeys();
       this.chef._draw(this.ctx);
       this._generateIngredient();
       this.knivesID = setInterval(() => {
        this._generateKnife();
       }, 4000);
       window.requestAnimationFrame(this._update.bind(this));
    }
}