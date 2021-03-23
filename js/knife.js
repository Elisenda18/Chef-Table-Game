"use strict";

class Knife {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
    }

    _draw(ctx) {
        this.image.src = "img/bloddyKnife.png";
        ctx.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}