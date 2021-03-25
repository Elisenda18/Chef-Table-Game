'use strict';

let game;
let timeLeft;

document.addEventListener("DOMContentLoaded", ()=> {

    const canvas = document.getElementById("chefCanvas");
    const ctx = canvas.getContext("2d");

    //Splash Screen
    const playBtn = document.getElementById("play");
    playBtn.addEventListener("click", getInstructions);
    animateScript();

    //GameOver Screen
    const gameOverBtn = document.getElementById("gameover");
    gameOverBtn.addEventListener("click", startGame);

    //GameWon Screen
    const gameWonBtn = document.getElementById("gamewon");
    gameWonBtn.addEventListener("click", startGame);

    function getInstructions() {
        document.getElementById("splash-screen").style ="display: none;";
        document.getElementById("instructions").style="display: block;";
        document.getElementById("game").style="display: none;";
        document.getElementById("gameover").style ="display: none;";
        document.getElementById("gamewon").style="display: none;";

        const startBtn = document.getElementById("start");
        startBtn.addEventListener("click", startGame);
    }


    function startGame() {
        document.getElementById("splash-screen").style ="display: none;";
        document.getElementById("instructions").style="display: none;";
        document.getElementById("game").style="display: block;";
        document.getElementById("gameover").style ="display: none;";
        document.getElementById("gamewon").style="display: none;";

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
    }

    function gameOver() {
        document.getElementById("timer__p").innerHTML = `60 seconds remaining`;
        document.getElementById("timer").style =   "border: 0.3em solid #DCDCDC;";
        document.getElementById("timer__p").style = `color: #9c9a9a;`;

        document.getElementById("game").style ="display: none;";
        document.getElementById("gameover").style="display: block;";
    }

    function gameWon() {
        document.getElementById("timer__p").innerHTML = `60 seconds remaining`;
        document.getElementById("timer").style =   "border: 0.3em solid #DCDCDC;";
        document.getElementById("timer__p").style = `color: #9c9a9a;`;

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