'use strict';

let game;

document.addEventListener("DOMContentLoaded", ()=> {

    const canvas = document.getElementById("chefCanvas");
    const ctx = canvas.getContext("2d");

    const playBtn = document.getElementById("play-btn");
    playBtn.addEventListener("click", startGame);



    function startGame() {

        document.getElementById("splash-screen").style ="display: none;";
        document.getElementById("game").style="display: block;"

        const startBtn = document.getElementById("start-btn");
        startBtn.addEventListener("click", () => {
            const chefsGame = new Game(
               {
                    ctx: ctx,
                    rows: canvas.width/10,
                    columns: canvas.height/10,
                    maxCells: 10,
                    chef: new Chef(canvas.width/10, canvas.height/10),
                    ingredients: new Ingredients(canvas.width/10, canvas.height/10),
                },
            );

            chefsGame._start()
        })

    }

})