'use strict';

class Game {
    constructor(options, callback) {
        this.ctx = options.ctx;
        this.chef = options.chef;
        this.rows = options.rows;
        this.columns = options.columns;
        this.maxCells = options.maxCells; 
        this.ingredients = options.ingredients;
        this.ingredienToPrint = [];
        this.knife = options.knife;
        this.knifesToPrint = [];
        this.cb = callback;
    }

    _drawChef() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(
            this.chef.currentPosition.column * this.maxCells,
            this.chef.currentPosition.row * this.maxCells,
            8,
            8
        )
    }

    _generateIngredient() {
        this.ingredienToPrint.unshift(this.ingredients.list[0]);
        this.ingredients.list.splice(0,1);
    }

    _drawIngredient() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(
            this.ingredienToPrint[0].column * this.maxCells,
            this.ingredienToPrint[0].row * this.maxCells,
            8,
            8,
        );
    }

    _generateKnife() {
        let newKinfe = new Knife(50, 50);
        this.knifesToPrint.push(newKinfe);
    }

    _assignControlsToKeys() {
        document.addEventListener("keydown", (event) => {
            //As the player moves the Chef it's initial position gets updated & printed again
            switch (event.code) {
                case "ArrowUp":
                    this.chef.goUp();
                    console.log(this.chef.currentPosition)
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
        this._drawChef();
        this._drawIngredient();
        if (this.chef.takesIngredient(this.ingredienToPrint[0])) {
            this.ingredienToPrint.pop();
            this._generateIngredient();
            this.chef.scoreUp();
        }
        this.knifesToPrint.forEach(knife => {
            knife._draw(this.ctx);
        });

        window.requestAnimationFrame(this._update.bind(this));
    }

    _start() {
       this._assignControlsToKeys();
       this._drawChef();
       this._generateIngredient();
       setInterval(() => {
        this._generateKnife();
      }, 2000);
       window.requestAnimationFrame(this._update.bind(this));
    }

}