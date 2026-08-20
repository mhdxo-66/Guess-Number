"use strict";
let score = Number(localStorage.getItem('score')) || 20;
let highscore = Number(localStorage.getItem('highscore')) || 0;

function rst() {
    localStorage.clear();
    location.reload();
}
let rnm;
function rnmc() {
    return rnm = (Math.trunc(Math.random() * 20) + 1);
};
rnmc();

document.querySelector('.form').addEventListener('submit', function (e) {

    console.log(rnm);

    e.preventDefault();
    let inpnum;
    inpnum = Number(document.querySelector('.numes').value);
    if (inpnum > rnm) {
        document.querySelector('.status').textContent = "To High ++++";
        document.body.style.backgroundColor = "red";
        if (score > 0) {
            score--;
        } else if (score === 0) {
            alert('Game Over👾');
            rst();
        }
        localStorage.setItem('score', score);
        lvst();

    } else if (inpnum < rnm) {
        document.querySelector('.status').textContent = "To Low ----";
        document.body.style.backgroundColor = "blue";
        if (score > 0) {
            score--;
        } else if (score === 0) {
            alert('Game Over👾');
            rst();
        }
        localStorage.setItem('score', score);
        lvst();

    } else if (inpnum === rnm) {
        document.querySelector('.status').textContent = "🎉 Correct Number!";
        document.body.style.backgroundColor = "green";
        document.querySelector('.ans').textContent = rnm;
        if (score < 20) {
            score++;
        }
        highscore++;
        localStorage.setItem('highscore', highscore);
        rnmc();
    }
    localStorage.setItem('score', score);
    lvst();
});
function lvst() {
    document.querySelector('.score').textContent = `💯 Score : ${score}`;
    document.querySelector('.hscore').textContent = `🥇 Highscore : ${highscore}`;
}
lvst();