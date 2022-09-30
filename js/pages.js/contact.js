//---------all input selected here
const form = document.querySelector(".formContact");
const firstName = document.getElementById("firstName");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const message = document.getElementById("message");

//---------all the error down here
const firstNameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const subjectError = document.querySelector(".subjectError");
const messageError = document.querySelector(".messageError");

//-----------tittle--------
const title = document.querySelector(".tittleInfo");
title.innerHTML = "AD design Blog | Contact";
//---------------form validation--------------

const successFull = document.querySelector(".formText");
const successFullMsg = document.querySelector(".successFull");
// console.log(displayBox);
//---------
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
  if (
    checkLength(firstName.value, 4) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 14) &&
    checkLength(message.value, 24)
  ) {
    firstName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    successFullMsg.style.display = "block";
  } else {
    successFullMsg.style.display = "none";
  }
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

// function displayMassageForm() {

// }

// displayMassageForm();

// const submitBtn = document.querySelector(".cta-submit_form");
// submitBtn.onclick = () => {
//   if (
//     checkLength(firstName.value, 4) === true &&
//     validateEmail(email.value) === true &&
//     checkLength(subject.value, 14) === true &&
//     checkLength(message.value, 24) === true
//   ) {
//     displayBox.innerHTML = `<span> Your form has been sent</span>`;
//   } else {
//     return "Massage can not displayed";
//   }
//   console.log("object");
// };
