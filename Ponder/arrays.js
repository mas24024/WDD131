// arrays.js

// 1)
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}

// Convert array to HTML 
const stepsHtml = steps.map(listTemplate);

// Join all items into a single HTML string
document.querySelector("#myList").innerHTML = stepsHtml.join("");


// 2)
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
console.log("GPA Points:", gpaPoints);


// 3)
const totalPoints = gpaPoints.reduce((total, item) => total + item);
const gpa = totalPoints / gpaPoints.length;
console.log("GPA:", gpa);


// 4)
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
console.log("Short words:", shortWords);


// 5)
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
console.log("Lucky number index:", luckyIndex);
