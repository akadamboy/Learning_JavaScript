"use strict";

//getting al the required elements from the DOM
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtm = document.querySelector(".btn--hold");
const diceElement = document.querySelector(".dice");
const player1ScoreElement = document.getElementById("score--0");
const player1CurrentScoreElement = document.getElementById("current--0");
const player2ScoreElement = document.getElementById("score--1");
const player2CurrentScoreElement = document.getElementById("current--1");

function initGame() {
  //reset all the scores
  player1ScoreElement.textContent = 0;
  player2ScoreElement.textContent = 0;
  player1CurrentScoreElement.textContent = 0;
  player2CurrentScoreElement.textContent = 0;

  diceElement.classList.add("hidden");
}

initGame();

rollDiceBtn.addEventListener("click", function () {
  diceElement.classList.remove("hidden");
});
