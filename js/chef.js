'use strict';

class Chef {
    constructor() {
        this.initialPosition = {
            column: 250, 
            row: 490, 
            width: 10,
            height: 10
        };
        this.score = 0;
        this.currentPosition = {...this.initialPosition};
    }

    goUp() {
        this.currentPosition.row = (this.currentPosition.row - 5 + 500) % 500;
    }

    goDown() {
        this.currentPosition.row = (this.currentPosition.row + 5) % 500;
    }

    goLeft() {
        this.currentPosition.column = (this.currentPosition.column - 5 + 500) % 500;
    }

    goRight() {
        this.currentPosition.column = (this.currentPosition.column + 5) % 500;
    }
    
    collidesWithKnifes(knife) {
        return this.currentPosition.row === knife.row && this.currentPosition.column === knife.column;
    }

    takesIngredient(chef, ingredient) {
        return !(
            ((chef.row + chef.height) < (ingredient.row)) ||
            (chef.row > (ingredient.row + ingredient.height)) ||
            ((chef.column + chef.width) < ingredient.column) ||
            (chef.column > (ingredient.column + ingredient.width))
        );
    }

    scoreUp() {
        this.score += 10;
    }
}