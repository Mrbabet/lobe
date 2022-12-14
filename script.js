const menuBtn = document.querySelector(".burger-btn");
const hiddenMenu = document.querySelector(".mobile-navigation");
const blurMenu = document.querySelector(".navigation-blur");
const blurHeader = document.querySelector(".header-blur");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("active");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", function () {
  hiddenMenu.classList.toggle("active");
  blurMenu.classList.toggle("active");
  blurHeader.classList.toggle("active");
});

const loader = document.querySelector(".loader-wrapper");
const main = document.querySelector("main");
const hideScroll = document.querySelector("body");

function init() {
  setTimeout(() => {
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
}

init();

function changeColor() {
  let buttonColor = document.querySelector(".header-button");
  let scrollValue = window.scrollY;
  if (scrollValue < 50) {
    buttonColor.classList.remove("color-green");
  } else {
    buttonColor.classList.add("color-green");
  }
}
window.addEventListener("scroll", changeColor);
