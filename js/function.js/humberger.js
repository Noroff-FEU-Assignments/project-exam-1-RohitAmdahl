const nav = document.querySelector(".menu");
const barIcon = document.getElementById("burger-nav");
// const closeIcon = document.querySelector(".close");

const openMenu = function () {
  barIcon.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    barIcon.classList.toggle("close");
  });
};
openMenu();
