'use strict';

class Chef {
    constructor(maxRows, maxColumns) {
        this.initialPosition = {
            row: 25, 
            column: 49, 
        };
        this.maxColumns = maxRows;
        this.maxRows = maxColumns;
        this.direction = "up";
        this.score = 0;
    }

    _move() {

        switch (this.direction) {
            case "up":
                this.initialPosition = {
                    row: (this.initialPosition.row + 1) % this.maxRows,
                    column: this.initialPosition.column,
                }
                break;

            case "down":
                this.initialPosition = {
                    row: (this.initialPosition.row - 1) % this.maxRows,
                    column: this.initialPosition.column,
                }
                break;
            case "left":
                this.initialPosition = {
                    row: this.initialPosition.row,
                    column: (this.initialPosition.column -1 + this.maxColumns) % this.maxColumns,
                }
                break;
            case "right":
                this.initialPosition = {
                    row: this.initialPosition.row,
                    column: (this.initialPosition.column + 1) % this.maxColumns,
                }
                break;
            default:
                break;
        }

    }

    _goUp() {
        

    }

    _goDown() {

    }

    _goLeft() {

    }

    _goRight() {

    }

    _collidesWithObstacle() {

    }

    _takesIngredient() {

    }

    _scoreUp() {
        this.score += 10;
    }
}