//---------all input selected here
const form = document.querySelector("form");
console.log(form);
const firstName = document.getElementById("firstName");
console.log(firstName);
const subject = document.getElementById("subject");
console.log(subject);
const email = document.getElementById("email");
console.log(email);
const message = document.getElementById("message");
console.log(message);

//---------all the error down here
const firstNameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const subjectError = document.querySelector(".subjectError");
const messageError = document.querySelector(".messageError");

//-----------tittle--------
const title = document.querySelector(".tittleInfo");
title.innerHTML = "AD design Blog | Contact";
//---------------form validation--------------
function validationForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 4) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 14) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 24) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  console.log("hello");
}

form.addEventListener("submit", validationForm);

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
