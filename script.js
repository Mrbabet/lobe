const menuBtn = document.querySelector(".burger-btn");
const hiddenMenu = document.querySelector(".mobile-navigation");
const blurMenu = document.querySelector(".mobile-navigation-blur");
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
