console.log("working...")

const hamburger = document.querySelector("#hamburger-menu");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavExit = document.querySelector("#mobile-nav .exit");

hamburger.addEventListener("click", () => {
  mobileNav.style.display = "block";
});


mobileNavExit.addEventListener("click", () => {
  mobileNav.style.display = "none";
});