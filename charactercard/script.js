// Character Object
const character = {
  name: "Mr. 7-Eleven",
  class: "Probability Wizard",
  level: 1,
  health: 100,
  image: "images/mr7eleven.png", // make sure this matches your image filename

  attacked() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has fallen… 💀 The odds finally caught up.`);
    }
    displayCharacter();
  },

  levelUp() {
    this.level++;
    displayCharacter();
  }
};

// Display Values in the HTML
function displayCharacter() {
  document.getElementById("character-name").textContent = character.name;
  document.getElementById("character-class").textContent = character.class;
  document.getElementById("character-level").textContent = character.level;
  document.getElementById("character-health").textContent = character.health;
  document.getElementById("character-image").src = character.image;
}

// Button Event Listeners
document.getElementById("attackBtn").addEventListener("click", () => character.attacked());
document.getElementById("levelBtn").addEventListener("click", () => character.levelUp());

// Run once on load
displayCharacter();
