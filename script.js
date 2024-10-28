const hamburger = document.querySelector(".hamburger-menu");
const navigationContainer = document.querySelector(".navigation-container");
const hamIcon = document.querySelector(".ham-icon");
hamburger.addEventListener("click", () => {
  navigationContainer.classList.toggle("active-nav-items");
  hamIcon.classList.toggle("fa-xmark");
  document.body.classList.toggle("no-scroll-active");
});
