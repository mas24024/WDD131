import { recipes } from "./recipes.mjs";

// Use the first recipe for Part 1
const recipe = recipes[0];

const img = document.querySelector(".recipe-img");
const tagContainer = document.querySelector(".tags");
const title = document.querySelector("h2");
const rating = document.querySelector(".rating");
const description = document.querySelector(".description");

// Image
img.src = `images/${recipe.image}`;
img.alt = recipe.name;

// Tags
tagContainer.innerHTML = "";
recipe.tags.forEach(tag => {
  const span = document.createElement("span");
  span.textContent = tag;
  tagContainer.appendChild(span);
});

// Title
title.textContent = recipe.name;

// Rating
function createStars(num) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= num ? "⭐" : "☆";
  }
  return stars;
}

rating.setAttribute("aria-label", `Rating: ${recipe.rating} out of 5 stars`);
rating.textContent = createStars(recipe.rating);

// Description
description.textContent = recipe.description;
