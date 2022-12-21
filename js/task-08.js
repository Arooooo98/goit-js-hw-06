"use strict";

const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = {
    email: e.currentTarget.elements["email"].value,
    password: e.currentTarget.elements["password"].value,
  };

  if (input.email.length === 0 || input.password.length === 0) {
    alert("Required fields");
    return;
  }
  console.log(input);
  e.currentTarget.reset();
});
