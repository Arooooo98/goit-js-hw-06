"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const newColor = document.querySelector(".change-color");
newColor.addEventListener("click", (e) => {
  const bgColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = bgColor;
  document.querySelector(".color").textContent = bgColor;
});