import Ball from "./Ball.js"
import Paddle from "./paddle.js";

const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")


let lastTime;

function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
       //ball.update(delta);
       computerPaddle.update(delta, ball.y )

       if (isLose()) handleLose()
    }
    
   lastTime = time;
    window.requestAnimationFrame(update);
}

function isLose() {
    const rect = ball.rect
    return rect.bottom >= window.innerHeight || rect.top <= 0 
}

function handleLose() {
    const rect = ball.rect()
    if(rect.right >= window.innerHeight) {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }


    ball.reset   
    computerPaddle.reset
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = ( e.y / window.innerHeight) * 100;
})

window.requestAnimationFrame(update);