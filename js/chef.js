'use strict';

class Chef {
    constructor(maxRows, maxColumns) {
        this.initialPosition = {
            column: 25, 
            row: 49, 
        };
        this.maxColumns = maxColumns;
        this.maxRows = maxRows;
        this.score = 0;
        this.currentPosition = {...this.initialPosition};
    }

    goUp() {
        this.currentPosition.row = (this.currentPosition.row - 1 + this.maxRows) % this.maxRows;
        console.log(this.currentPosition);
    }

    goDown() {
        this.currentPosition.row = (this.currentPosition.row + 1) % this.maxRows;
        console.log(this.currentPosition);
    }

    goLeft() {
        this.currentPosition.column = (this.currentPosition.column - 1 + this.maxColumns) % this.maxColumns;
        console.log(this.currentPosition);

    }

    goRight() {
        this.currentPosition.column = (this.currentPosition.column + 1) % this.maxColumns;
        console.log(this.currentPosition);

    }
    
    collidesWithKnifes(knife) {
        return this.currentPosition.row === knife.row && this.currentPosition.column === knife.column;
    }

    takesIngredient(ingredient) {
        return this.currentPosition.row === ingredient.row && this.currentPosition.column === ingredient.column;
    }

    scoreUp() {
        this.score += 10;
    }
}