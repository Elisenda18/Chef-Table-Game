'use strict';

class Chef {
    constructor() {
        this.initialPosition = {
            column: 250, 
            row: 490, 
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
        /*
        //There is a bug in the chef.column, it "collides" when moving the column up & down

        const takesRight = chef.column + chef.width / 2 > ingredient.column - ingredient.width / 2;
        const takesLeft = chef.column - chef.width / 2 < ingredient.column + ingredient.width / 2;
        const takesTop = chef.row + chef.height / 2 > ingredient.row - ingredient.height / 2;
        const takesBottom = chef.row - chef.height / 2 < ingredient.row + ingredient.height / 2;

        if (takesRight || takesLeft || takesTop || takesBottom) return true
        */
    }

    scoreUp() {
        this.score += 10;
    }
}