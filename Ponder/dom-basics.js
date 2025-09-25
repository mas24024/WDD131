/*Tyler James Massey*/
const newParagraph = document.createElement("p");
newParagraph.innerText = 'Added With Javascript!';
document.body.appendChild(newParagraph);


const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "This section was created with JavaScript.";
newSection.appendChild(newP);
document.body.appendChild(newSection);


/* const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);

figure out the syntax for the above to make thingsd easier.

*/ 