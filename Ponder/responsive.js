// Select elements
const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

// Toggle the navigation and animation on click
menuButton.addEventListener("click", () => {
  nav.classList.toggle("hide");
  menuButton.classList.toggle("change");
});
