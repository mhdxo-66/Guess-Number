"use strict";
let score = Number(localStorage.getItem('score')) || 20;
let highscore = Number(localStorage.getItem('highscore')) || 0;

document.querySelector('.rst').addEventListener('click', function () {
    localStorage.clear();
    location.reload();
})
let rnm;
function rnmc() {
    return rnm = (Math.floor(Math.random() * 20) + 1);
};
rnmc();
document.querySelector('.btag').addEventListener('click', function () {
    location.reload();
});
document.querySelector('.form').addEventListener('submit', function (e) {
    console.log(rnm);
    e.preventDefault();
    let inpnum;
    inpnum = Number(document.querySelector('.numes').value);
    if (inpnum > rnm) {
        document.querySelector('.h2').textContent = "To High ++++";
        document.body.style.backgroundColor = "red";
        score--;
        localStorage.setItem('score', score);
        console.log(localStorage.getItem('score'))
        document.querySelector('.score').textContent = `💯 Score : ${score}`;
    } else if (inpnum < rnm) {
        document.querySelector('.h2').textContent = "To Low ----";
        document.body.style.backgroundColor = "blue";
        score--;
        localStorage.setItem('score', score);
        document.querySelector('.score').textContent = `💯 Score : ${score}`;
    } else if (inpnum === rnm) {
        document.querySelector('.h2').textContent = "🎉 Correct Number!";
        document.body.style.backgroundColor = "green";
        document.querySelector('.ans').textContent = rnm;
        if (score < 20) {
            score++;
        }
        document.querySelector('.score').textContent = `💯 Score : ${score}`;
        highscore++;
        document.querySelector('.hscore').textContent = `🥇 Highscore : ${highscore}`;
        rnmc();
    }
});

