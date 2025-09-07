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

let player1Score = 0;
let player2Score = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let activePlayer = 1;
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
  player2Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
  currentScore = 0;
  player1CurrentScoreElement.textContent = currentScore;
};

const roll = function () {};

initGame();

rollDiceBtn.addEventListener("click", function () {
  const diceValue = Math.trunc(Math.random() * 6 + 1);
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${diceValue}.png`;
  if (diceValue !== 1) {
    currentScore += diceValue;
    player1CurrentScoreElement.textContent = currentScore;
  } else {
    switchPlayer();
  }
});

holdBtn.addEventListener("click", function () {
  player1Score += currentScore;
  player1ScoreElement.textContent = player1Score;
  player1CurrentScoreElement.textContent = 0;
  currentScore = 0;
  switchPlayer();
});
