// Year Count
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////// Mobile Navigation
const openBtnEl = document.querySelector(".btn-open");
const closeBtnEl = document.querySelector(".btn-close");
const headerEl = document.querySelector(".header");

openBtnEl.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
});

closeBtnEl.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});
