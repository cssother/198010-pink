var button = document.querySelector(".header__button");
var menu = document.querySelector(".main-nav");
var topHeader = document.querySelector(".header-top");

button.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--closed");
  button.classList.toggle("header__button--close");
  topHeader.classList.toggle("header-top--opened");
})
