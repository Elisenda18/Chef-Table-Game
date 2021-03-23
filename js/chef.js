'use strict';

class Chef {
    constructor() {
        this.initialPosition = {
            x: 225, 
            y: 400, 
            width: 60,
            height: 60
        };
        this.score = 0;
        this.currentPosition = {...this.initialPosition};
        this.imageChef = new Image ();
    }

    _draw(ctx) {
        this.imageChef.src = "img/baker.png";
        ctx.drawImage(
            this.imageChef, 
            this.currentPosition.x, 
            this.currentPosition.y, 
            this.currentPosition.width,
            this.currentPosition.height
        )
    }

    goUp() {
        this.currentPosition.y = (this.currentPosition.y - 5 + 500) % 500;
    }

    goDown() {
        this.currentPosition.y = (this.currentPosition.y + 5) % 500;
    }

    goLeft() {
        this.currentPosition.x = (this.currentPosition.x - 5 + 500) % 500;
    }

    goRight() {
        this.currentPosition.x = (this.currentPosition.x + 5) % 500;
    }

    collidesWithObject(chef, object) {
        return !(
            ((chef.y + chef.height) < (object.y)) ||
            (chef.y > (object.y + object.height)) ||
            ((chef.x + chef.width) < object.x) ||
            (chef.x > (object.x + object.width))
        );
    }

    scoreUp() {
        this.score += 10;
    }
}