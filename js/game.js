'use strict';

class Game {
    constructor(options, callback) {
        this.ctx = options.ctx;
        this.chef = options.chef;
        this.rows = options.rows;
        this.columns = options.columns;
        this.maxCells = options.maxCells; 
        this.ingredients = options.ingredients;
        this.knifes = options.knifes;
        this.cb = callback;
    }

    _drawChef() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(
            this.chef.initialPosition.row * this.maxCells,
            this.chef.initialPosition.column * this.maxCells,
            8,
            8
        )
    }

    _assignControlsToKeys() {
        document.addEventListener("keydown", (event) => {
            switch (event.code) {
                case "ArrowUp":
                    
                    break;
            
                default:
                    break;
            }
        })
    }



    _clean() {

    }

    _update() {
        
    }

    _start() {
       this._drawChef();
    }



}