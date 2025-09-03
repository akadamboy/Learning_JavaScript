"use strict";

const myNumber = Math.trunc(Math.random() * 21);

console.log(document.querySelector(".message").textContent);

let score = Number(document.querySelector(".score").textContent);
let highScore = document.querySelector(".highscore").textContent;
console.log(document.querySelector(".guess").value);

console.log(`score is ${score}`);
// console.log(`highscore is ${highScore}`);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".highscore").textContent = 10;

// document.querySelector(".guess").value = 23;

// const check_button = document.getElementsByClassName("check")[0];

const checkButton = document.querySelector(".check");
const resetButton = document.querySelector(".reset");

checkButton.addEventListener("click", function () {
  const numberEntered = Number(document.querySelector(".guess").value);
  if (numberEntered <= 20) {
    if (numberEntered === myNumber) {
      document.querySelector(".number").textContent = myNumber;
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector(".score").textContent = score;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = score;
      }
    } else if (numberEntered < myNumber) {
      document.querySelector(".message").textContent = "Guess Heigher";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Guess Lower";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent =
      "Enter Number Between 1 and 20";
  }
});

resetButton.addEventListener("click", function () {
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
});
