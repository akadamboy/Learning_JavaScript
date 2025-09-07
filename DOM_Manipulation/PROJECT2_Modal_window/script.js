"use strict";

const showbuttonElement = document.querySelectorAll(".show-modal");
const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
const closeButtonElement = document.querySelector(".close-modal");

function closeModal() {
  modalElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
}

function openModal() {
  modalElement.classList.remove("hidden");
  overlayElement.classList.remove("hidden");
}

showbuttonElement.forEach((btn) => btn.addEventListener("click", openModal));

closeButtonElement.addEventListener("click", closeModal);

overlayElement.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeModal();
});
