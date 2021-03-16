"use strict";

class Knife {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
    }

    _draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}