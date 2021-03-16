"use strict";

class Knife {
    constructor(maxRows, maxColumns){
        this.maxRows = maxRows;
        this.maxColumns = maxColumns;
        this.column = Math.floor(Math.random() * this.maxColumns);
        this.row = Math.floor(Math.random() * this.maxRows);
        this.img = new Image();
    }


    _draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(
            this.column * 10,
            this.row * 10,
            8,
            8
        )
    }


}