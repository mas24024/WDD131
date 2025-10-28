// Movies
const movies = [
  {
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐",
    description:
      "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
  },
  {
    title: "The Other Side of Heaven",
    date: "December 14, 2001",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐",
    description:
      "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "A young couple and missionaries in a row boat on the ocean",
  },
  {
    title: "Luca",
    date: "June 18, 2021",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐",
    description:
      "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto standing on the beach",
  },
  {
    title: "17 Miracles",
    date: "June 3, 2011",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐",
    description:
      "A moving depiction of the Willie Handcart Company's 1856 journey west, focusing on miraculous events that helped pioneers survive a brutal migration.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt: "Handcart pioneers walking through snow",
  },
];

//AUTO MODE
const movieList = document.getElementById("movie-list");

movies.forEach((movie) => {
  const html = `
    <article class="movie">
      <h2>${movie.title}</h2>
      <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
      <p><strong>Release Date:</strong> ${movie.date}</p>
      <p><strong>Recommended Age:</strong> ${movie.ages}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
      <p id="desc">${movie.description}</p>
    </article>
  `;
  movieList.innerHTML += html;
});
