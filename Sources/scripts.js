"use strict";
let inpnum;
let score = 20;
document.querySelector('.score').innerHTML = "💯 Score: 20";
let highscore = 0;
document.querySelector('.hscore').innerHTML = "🥇 Highscore: 0";
document.querySelector('.h2').innerHTML = "Start guessing...";

const num = Math.floor(Math.random() * 20) + 1;

document.querySelector('.chk').addEventListener('click', function () {
    inpnum = Number(document.querySelector('.numes').value);
});

