"use strict";

const inputElement = document.getElementById("font-size-control");
const spanElement = document.getElementById("text");

const changeSize = (e) => {
  const fontSize = e.target.value + "px";
  spanElement.style.fontSize = fontSize;
};

const circle = document.querySelector("#font-size-control");
circle.value = 1;

inputElement = addEventListener("input", changeSize);
