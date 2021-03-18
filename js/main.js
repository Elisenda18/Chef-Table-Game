'use strict';

let game;

document.addEventListener("DOMContentLoaded", ()=> {

    const canvas = document.getElementById("chefCanvas");
    const ctx = canvas.getContext("2d");

    //Splash Screen
    const playBtn = document.getElementById("play");
    playBtn.addEventListener("click", startGame);
    animateScript();

    //GameOver Screen
    const gameOverBtn = document.getElementById("gameover");
    gameOverBtn.addEventListener("click", startGame);

    //GameWon Screen
    const gameWonBtn = document.getElementById("gamewon");
    gameWonBtn.addEventListener("click", startGame);


    function startGame() {
        document.getElementById("splash-screen").style ="display: none;";
        document.getElementById("gameover").style ="display: none;";
        document.getElementById("gamewon").style="display: none;";
        document.getElementById("game").style="display: block;"

        const startBtn = document.getElementById("start");
        startBtn.addEventListener("click", () => {
            const chefsGame = new Game(
               {
                    ctx: ctx,
                    chef: new Chef(),
                    ingredients: new Ingredients(),
                },
                gameOver,
                gameWon
            );
            chefsGame._start()
        })
    }

    function gameOver() {
        document.getElementById("game").style ="display: none;";
        document.getElementById("gameover").style="display: block;";
    }

    function gameWon() {
        document.getElementById("game").style ="display: none;";
        document.getElementById("gamewon").style="display: block;";
    }

    function animateScript() {
        let position = 123.5;
        setInterval ( () => {
            document.getElementById("image").style.backgroundPosition = 
            `-${position}px 0px`; 
            if (position < 600)
            { position = position + 123.5;}
            else
            { position = 123.5; }
            }, 500 ); 
    }

})