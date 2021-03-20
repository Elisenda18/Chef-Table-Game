"use strict"

const dataIngredients = [
    {
       name: "bread",
       img: "./img/bread-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 60,
       height: 50
    },
    {
       name: "cheese",
       img: "./img/cheese-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 30,
       height: 30
    },
    {
       name: "chooping board",
       img: "./img/choppingboard-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 40,
       height: 40
    },
    {
       name: "cookbook",
       img: "./img/cookbook-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 40,
       height: 40
    },
    {
        name: "milk",
        img: "./img/milk-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 40
    },
    {
        name: "mushrooms",
        img: "./img/mushrooms-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "pan",
        img: "./img/pan-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "pineapple",
        img: "./img/pineapple-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "salt & pepper",
        img: "./img/salt&pepper-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "spicy",
        img: "./img/spicy-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 30,
        height: 30
    },
    {
        name: "tool",
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


