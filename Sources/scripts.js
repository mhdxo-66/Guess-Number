"use strict";
let score = 20;
let highscore = 0;

document.querySelector('.rst').addEventListener('click', function () {
    localStorage.clear();
})
let rnm;
function rnmc() {
    return rnm = (Math.floor(Math.random() * 20) + 1);
};
rnmc();
document.querySelector('.form').addEventListener('submit', function (e) {
    console.log(rnm)
    e.preventDefault();
    let inpnum;
    inpnum = Number(document.querySelector('.numes').value);
    if (inpnum > rnm) {
        document.querySelector('.h2').innerHTML = "To High ++++";
        document.body.style.backgroundColor = "red";
        score--;
        document.querySelector('.score').innerHTML = score;
    } else if (inpnum < rnm) {
        document.querySelector('.h2').innerHTML = "To Low ----";
        document.body.style.backgroundColor = "blue";
        score--;
        document.querySelector('.score').innerHTML = score;
    } else if (inpnum === rnm) {
        document.querySelector('.h2').innerHTML = "🎉 Correct Number!";
        document.body.style.backgroundColor = "green";
        document.querySelector('.ans').innerHTML = rnm;
        if (score < 20) {
            score++;
        }
        document.querySelector('.score').innerHTML = score;
        highscore++;
        document.querySelector('.hscore').innerHTML = highscore;
        rnmc();
    }
});
