"use strict";
let score = 20;
let highscore = 0;

const rnm = Math.floor(Math.random() * 20) + 1;
console.log(rnm)

document.querySelector('.form').addEventListener('submit', function (e) {
    console.log(rnm)
    e.preventDefault();
    let inpnum;
    inpnum = Number(document.querySelector('.numes').value);
    if (inpnum > rnm) {
        document.querySelector('.h2').innerHTML = "To High ++++";
    } else if (inpnum < rnm) {
        document.querySelector('.h2').innerHTML = "To Low ----";
    } else if (inpnum === rnm) {
        document.querySelector('.h2').innerHTML = "🎉 Correct Number!";
        document.body.style.backgroundColor = "#5EAF46";
        document.querySelector('.ans').innerHTML = rnm;
    }
});
