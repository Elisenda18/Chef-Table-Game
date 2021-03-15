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