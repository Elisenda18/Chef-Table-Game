"use strict"

const dataIngredients = [
    {
       name: "Eggplant",
       img: "./img/eggplant.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 40,
       height: 40
    },
    {
       name: "Fish",
       img: "./img/fish.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 50,
       height: 50
    },
    {
       name: "Frying Pan",
       img: "./img/frying-pan.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 60,
       height: 60
    },
    {
       name: "Basil",
       img: "./img/basil.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 40,
       height: 40
    },
    {
        name: "Olive Oil",
        img: "./img/olive-oil.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 40,
        height: 50
    },
    {
        name: "Salt & Pepper",
        img: "./img/salt&pepper-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 50,
        height: 50
    },
    {
        name: "Tomato",
        img: "./img/tomato.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 40,
        height: 40
    },
    {
        name: "Zucchini",
        img: "./img/zucchini.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 40,
        height: 40
    },
    {
        name: "Bell Pepper",
        img: "./img/pepper.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 40,
        height: 40
    },
    {
        name: "Onion",
        img: "./img/onion.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 40,
        height: 40
    }
];



const dataKnifes = [
    new Knife(135, 345, 40, 45),
    new Knife(280, 118, 40, 45),
    new Knife(350, 100, 40, 45),
    new Knife(80, 245, 40, 45),
    new Knife(300, 425, 40, 45),
    new Knife(400, 75, 40, 45),
    new Knife(120, 420, 40, 45),
    new Knife(365, 145, 40, 45),
    new Knife(415, 85, 40, 45),
    new Knife(220, 320, 40, 45),
    new Knife(190, 305, 40, 45),
    new Knife(250, 400, 40, 45),
];


