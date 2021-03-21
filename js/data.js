"use strict"

const dataIngredients = [
    {
       name: "Bread",
       img: "./img/bread-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 60,
       height: 50
    },
    {
       name: "Cheese",
       img: "./img/cheese-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 30,
       height: 30
    },
    {
       name: "Chopping Board",
       img: "./img/choppingboard-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 40,
       height: 40
    },
    {
       name: "Cookbook",
       img: "./img/cookbook-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 40,
       height: 40
    },
    {
        name: "Milk",
        img: "./img/milk-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 40
    },
    {
        name: "Mushrooms",
        img: "./img/mushrooms-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "Pan",
        img: "./img/pan-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "Pineapple",
        img: "./img/pineapple-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "Salt & Pepper",
        img: "./img/salt&pepper-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "Chilli Paprika",
        img: "./img/spicy-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "Palettte Knife",
        img: "./img/tool-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    }
];



const dataKnifes = [
    new Knife(135, 345, 30, 35),
    new Knife(280, 118, 30, 35),
    new Knife(350, 100, 30, 35),
    new Knife(80, 245, 30, 35),
    new Knife(300, 425, 30, 35),
    new Knife(400, 75, 30, 35),
    new Knife(120, 420, 35),
    new Knife(365, 145, 30, 35),
    new Knife(415, 85, 30, 35),
    new Knife(220, 320, 30, 35),
    new Knife(190, 305, 30, 35),
    new Knife(250, 400, 30, 35),
];


