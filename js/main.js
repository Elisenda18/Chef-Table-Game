"use strict";

let game;

document.addEventListener("DOMContentLoaded", ()=> {

    const canvas = document.getElementById("chefCanvas");
    const ctx = canvas.getContext("2d");

    const startBtn = document.getElementById("start-btn");
    startBtn.addEventListener("click", startGame);



    function startGame() {

        document.getElementById("splash-screen").style ="display: none;";
        document.getElementById("game").style="display: block;"

    }



    









})