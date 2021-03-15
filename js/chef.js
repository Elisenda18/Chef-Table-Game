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
    }

    goUp() {
        this.initialPosition.row = (this.initialPosition.row - 1 + this.maxRows) % this.maxRows;
    }

    goDown() {
        this.initialPosition.row = (this.initialPosition.row + 1) % this.maxRows;
    }

    goLeft() {
        this.initialPosition.column = (this.initialPosition.column - 1 + this.maxColumns) % this.maxColumns;
    }

    goRight() {
        this.initialPosition.column = (this.initialPosition.column + 1) % this.maxColumns;
    }
    
    collidesWithObstacle() {

    }

    takesIngredient() {

    }

    scoreUp() {
        this.score += 10;
    }
}