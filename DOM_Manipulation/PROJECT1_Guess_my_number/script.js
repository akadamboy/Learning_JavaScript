"use strict";

let myNumber = Math.trunc(Math.random() * 20) + 1;

// console.log(document.querySelector(".message").textContent);

const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");
const checkButton = document.querySelector(".check");
const resetButton = document.querySelector(".reset");
const inputElement = document.querySelector(".guess");
const messageElement = document.querySelector(".message");
const secretNumber = document.querySelector(".number");

let score = Number(scoreElement.textContent);
let highScore = Number(highScoreElement.textContent);

function GameOver() {
  inputElement.disabled = true;
  checkButton.disabled = true;
  secretNumber.textContent = "?";
  inputElement.value = "";
  messageElement.textContent = "Game Over";
  scoreElement.textContent = score;
}
// console.log(document.querySelector(".guess").value);

// console.log(`score is ${score}`);
// console.log(`highscore is ${highScore}`);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".highscore").textContent = 10;

// document.querySelector(".guess").value = 23;

// const check_button = document.getElementsByClassName("check")[0];

checkButton.addEventListener("click", function () {
  const numberEntered = Number(inputElement.value);
  //   console.log(numberEntered);
  if (!numberEntered) {
    messageElement.textContent = "Please enter a number";
  } else if (numberEntered > 20 || numberEntered < 1) {
    messageElement.textContent = "Number > 20, only 1 to 20 allowed";
  } else if (numberEntered === myNumber) {
    inputElement.disabled = true;
    checkButton.disabled = true;
    secretNumber.textContent = myNumber;
    messageElement.textContent = "🎉 Correct Number!";
    scoreElement.textContent = score;
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = score;
    }
  } else if (numberEntered < myNumber) {
    messageElement.textContent = "Guess Heigher";
    score--;
    if (score === 0) {
      GameOver();
    }
    scoreElement.textContent = score;
  } else {
    messageElement.textContent = "Guess Lower";
    score--;
    if (score === 0) {
      GameOver();
    }

    scoreElement.textContent = score;
  }
});

resetButton.addEventListener("click", function reset() {
  myNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  inputElement.disabled = false;
  checkButton.disabled = false;
  secretNumber.textContent = "?";
  inputElement.value = "";
  messageElement.textContent = "Start guessing...";
  scoreElement.textContent = score;
});
