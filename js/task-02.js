"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItem = [];

ingredients.forEach((ingredient) => {
  const vegetables = document.createElement("li");
  vegetables.textContent = ingredient;
  ingredientsItem.push(vegetables);
});
document.querySelector("#ingredients").append(...ingredientsItem);
