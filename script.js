const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const ball = document.getElementById('ball');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const lives1 = document.getElementById('lives1');
const lives2 = document.getElementById('lives2');
const gameOver = document.getElementById('gameOver');
const winnerMessage = document.getElementById('winnerMessage');
const restartButton = document.getElementById('restartButton');

let ballX = 400, ballY = 250;
let ballSpeedX = 4, ballSpeedY = 4;
let paddle1Y = 210, paddle2Y = 210;
let player1Score = 0, player2Score = 0;
let player1Lives = 3, player2Lives = 3;

const paddleSpeed = 10;
const paddleHeight = 80;

document.addEventListener('keydown', (e) => {
    if (e.key === 'w' && paddle1Y > 0) paddle1Y -= paddleSpeed; // Player 1 up
    if (e.key === 's' && paddle1Y < 420) paddle1Y += paddleSpeed; // Player 1 down
    if (e.key === 'ArrowUp' && paddle2Y > 0) paddle2Y -= paddleSpeed; // Player 2 up
    if (e.key === 'ArrowDown' && paddle2Y < 420) paddle2Y += paddleSpeed; // Player 2 down
    updatePaddles();
});

function updatePaddles() {
    paddle1.style.top = `${paddle1Y}px`;
    paddle2.style.top = `${paddle2Y}px`;
}

function updateBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top and bottom walls
    if (ballY <= 0 || ballY >= 485) ballSpeedY *= -1;

    // Ball collision with paddles
    if (ballX <= 20 && ballY >= paddle1Y && ballY <= paddle1Y + paddleHeight) ballSpeedX *= -1;
    if (ballX >= 765 && ballY >= paddle2Y && ballY <= paddle2Y + paddleHeight) ballSpeedX *= -1;

    // Ball out of bounds
    if (ballX <= 0) {
        player2Score++;
        score2.textContent = player2Score;
        resetBall();
        player1Lives--;
        lives1.textContent = player1Lives;
        checkGameOver();
    }
    if (ballX >= 785) {
        player1Score++;
        score1.textContent = player1Score;
        resetBall();
        player2Lives--;
        lives2.textContent = player2Lives;
        checkGameOver();
    }

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

function resetBall() {
    ballX = 400;
    ballY = 250;
    ballSpeedX *= -1;
}

function checkGameOver() {
    if (player1Lives === 0 || player2Lives === 0) {
        gameOver.classList.add('visible');
        winnerMessage.textContent = player1Lives === 0 ? "Player 2 Wins!" : "Player 1 Wins!";
        clearInterval(gameLoop);
    }
}

restartButton.addEventListener('click', () => {
    player1Score = player2Score = 0;
    player1Lives = player2Lives = 3;
    score1.textContent = score2.textContent = 0;
    lives1.textContent = lives2.textContent = 3;
    gameOver.classList.remove('visible');
    resetBall();
    gameLoop = setInterval(updateBall, 16);
});

let gameLoop = setInterval(updateBall, 16);