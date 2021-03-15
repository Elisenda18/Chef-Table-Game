"use strict";

class Ingredients {
    constructor(maxRows, maxColumns) {
        this.maxColumns = maxColumns;
        this.maxRows = maxRows;
        this.ingredientsList = [
            {
                name: "bread",
                img: "./img/bread-min.png",
                column: 20,
                row: 40,
              },
              {
                  name: "cheese",
                  img: "./img/cheese-min.png",
                  column: Math.floor(Math.random() * this.maxColumns),
                  row: Math.floor(Math.random() * this.maxRows),
              },
              {
                name: "chooping board",
                img: "./img/choppingboard-min.png",
                column: Math.floor(Math.random() * this.maxColumns),
                row: Math.floor(Math.random() * this.maxRows),
              },
        ]
    }
       
}