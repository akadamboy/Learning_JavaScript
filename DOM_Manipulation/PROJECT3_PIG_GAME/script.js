"use strict";

//getting al the required elements from the DOM
const player1Element = document.querySelector(".player--0");
const player2Element = document.querySelector(".player--1");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const diceElement = document.querySelector(".dice");
const player1ScoreElement = document.getElementById("score--0");
const player1CurrentScoreElement = document.getElementById("current--0");
const player2ScoreElement = document.getElementById("score--1");
const player2CurrentScoreElement = document.getElementById("current--1");

const score = [0, 0];
let player1Score = 0;
let player2Score = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let activePlayer = 0; //0 for player1 and 1 for player2
let currentScore = 0;

function initGame() {
  //reset all the scores
  player1ScoreElement.textContent = 0;
  player2ScoreElement.textContent = 0;
  player1CurrentScoreElement.textContent = 0;
  player2CurrentScoreElement.textContent = 0;

  diceElement.classList.add("hidden");
}

const switchPlayer = function () {
  currentScore = 0;
  const currentPlayerElement = document.querySelector(
    `.player--${activePlayer}`
  );
  const activePlyerCurrentScore = document.getElementById(
    `current--${activePlayer}`
  );
  currentPlayerElement.classList.remove("player--active");
  activePlyerCurrentScore.textContent = currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;
  const nextPlayerElement = document.querySelector(`.player--${activePlayer}`);
  nextPlayerElement.classList.add("player--active");
};

const roll = function () {};

initGame();

rollDiceBtn.addEventListener("click", function () {
  const diceValue = Math.trunc(Math.random() * 6 + 1);
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${diceValue}.png`;
  if (diceValue !== 1) {
    currentScore += diceValue;
    const CurrentScoreElement = document.getElementById(
      `current--${activePlayer}`
    );
    CurrentScoreElement.textContent = currentScore;
  } else {
    switchPlayer();
  }
});

holdBtn.addEventListener("click", function () {
  score[activePlayer] = score[activePlayer] + currentScore;
  const currentPlayerScoreElement = document.getElementById(
    `score--${activePlayer}`
  );
  currentPlayerScoreElement.textContent = score[activePlayer];
  if (score[activePlayer] >= 20) {
    const winnerElement = document.getElementById(`name--${activePlayer}`);
    winnerElement.textContent = `PLAYER ${activePlayer + 1} WINS 🎉`;
    rollDiceBtn.disabled = true;
    holdBtn.disabled = true;
  }

  currentPlayerScoreElement.textContent = score[activePlayer];

  switchPlayer();
});
