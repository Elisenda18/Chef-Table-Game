'use strict';

class Game {
    constructor(options, callback) {
        this.ctx = options.ctx;
        this.chef = options.chef;
        this.rows = options.rows;
        this.columns = options.columns;
        this.maxCells = options.maxCells; 
        this.ingredients = options.ingredients;
        this.ingredient = [];
        this.knifes = options.knifes;
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
        let newIngredientsList = [...this.ingredients.ingredientsList];
        this.ingredient.unshift(this.ingredients.ingredientsList[0]);
        console.log(this.ingredients.ingredientsList[0])
    }

    _drawIngredient() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(
            this.ingredient[0].column * this.maxCells,
            this.ingredient[0].row * this.maxCells,
            8,
            8,
        );
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
        if( this.chef.takesIngredient(this.ingredient[0])) {
            this.ingredient.pop();
            this._generateIngredient();
        }
        window.requestAnimationFrame(this._update.bind(this));
        
    }

    _start() {
       this._assignControlsToKeys();
       this._drawChef();
       this._generateIngredient();
       window.requestAnimationFrame(this._update.bind(this));
    }

}