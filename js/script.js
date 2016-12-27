var button = document.querySelector(".header__button");
var menu = document.querySelector(".main-nav");
var topHeader = document.querySelector(".header-top");
var navMain = document.querySelector(".main-nav");
var mapWrap = document.querySelector(".map__wrapper");

topHeader.classList.remove("header-top--no-js");
navMain.classList.remove("main-nav--no-js");
mapWrap.classList.remove("map__wrapper--no-js");

button.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--closed");
  button.classList.toggle("header__button--close");
  topHeader.classList.toggle("header-top--opened");
})
