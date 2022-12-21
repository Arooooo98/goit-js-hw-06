"use strict";

const categoryList = document.querySelectorAll("li.item");
console.log(`${categoryList.length}`);

categoryList.forEach((li) => {
  console.log(li.querySelector("h2").textContent);
  console.log(li.querySelectorAll("li").length);
});
