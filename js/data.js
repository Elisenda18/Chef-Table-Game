"use strict"

const dataIngredients = [
    {
       name: "Bread",
       img: "./img/bread-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 80,
       height: 70
    },
    {
       name: "Cheese",
       img: "./img/cheese-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 50,
       height: 50
    },
    {
       name: "Chopping Board",
       img: "./img/choppingboard-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 50,
       height: 50
    },
    {
       name: "Cookbook",
       img: "./img/cookbook-min.png",
       x: Math.floor(Math.random() * (440 - 60) + 60),
       y: Math.floor(Math.random() * (440 - 60) + 60),
       width: 50,
       height: 50
    },
    {
        name: "Milk",
        img: "./img/milk-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 40,
        height: 50
    },
    {
        name: "Mushrooms",
        img: "./img/mushrooms-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 50,
        height: 50
    },
    {
        name: "Pan",
        img: "./img/pan-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 50,
        height: 50
    },
    {
        name: "Pineapple",
        img: "./img/pineapple-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 50,
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
        name: "Chilli Paprika",
        img: "./img/spicy-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 50,
        height: 50
    },
    {
        name: "Palettte Knife",
        img: "./img/tool-min.png",
        x: Math.floor(Math.random() * (440 - 60) + 60),
        y: Math.floor(Math.random() * (440 - 60) + 60),
        width: 50,
        height: 50
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


