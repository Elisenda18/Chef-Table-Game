'use strict';

class Game {
    constructor(options, gameOver, gameWon) {
        this.ctx = options.ctx;
        this.chef = options.chef;
        this.ingredients = options.ingredients;
        this.ingredienToPrint = [];
        this.knife = dataKnifes;
        this.knifesToPrint = [];
        this.gameOver = gameOver;
        this.gameWon = gameWon;
        this.background = new Image();
    }

    _drawBackground () {
        this.background.src = "/img/board.jpg";
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

    _update() {
        this._clean();
        this._drawBackground();
        this.chef._draw(this.ctx);
        this._drawIngredient();

        //Taking ingredients
        if (this.chef.collidesWithObject(this.chef.currentPosition, this.ingredienToPrint[0])) {
            console.log("its colliding")
            this.ingredienToPrint.pop();
            this._generateIngredient();
            this.chef.scoreUp();
        }

        //If the player has take all the ingredients needed > Game Won
        if(!this.ingredients.list.length){
            this.gameWon();
            clearInterval(this.id);
            this._clean();
            return
        }

        //Knifes
        this.knifesToPrint.forEach(knife => {
            knife._draw(this.ctx);
        });    
        
        //Colliding with knifes
        for(let i= 0; i< this.knifesToPrint.length; i++) {
            if(this.chef.collidesWithObject(this.chef.currentPosition,this.knifesToPrint[i])) {
                this.gameOver();
                clearInterval(this.id);
                this._clean();
                return
            }
        }

        window.requestAnimationFrame(this._update.bind(this));
    }

    _start() {
       this._drawBackground();
       this._assignControlsToKeys();
       this.chef._draw(this.ctx);
       this._generateIngredient();
       this.id = setInterval(() => {
        this._generateKnife();
       }, 5000);
       window.requestAnimationFrame(this._update.bind(this));
    }



}