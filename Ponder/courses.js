// // courses.js
// 


// This is before the stretch

// const aCourse = {
//   code: "CSE121b",
//   name: "Javascript Language",
//   sections: [
//     {
//       sectionNum: 1,
//       roomNum: "STC 250",
//       enrolled: 26,
//       days: "TTh",
//       instructor: "Bro Ploss",
//     },
//     {
//       sectionNum: 2,
//       roomNum: "STC 255",
//       enrolled: 28,
//       days: "MWF",
//       instructor: "Sis Anderson",
//     },
//   ],

//   enrollStudent: function(sectionNum) {
//     const index = this.sections.findIndex(
//       (section) => section.sectionNum == sectionNum
//     );
//     if (index >= 0) {
//       this.sections[index].enrolled++;
//       renderSections(this.sections);
//     }
//   },

//   dropStudent: function(sectionNum) {
//     const index = this.sections.findIndex(
//       (section) => section.sectionNum == sectionNum
//     );
//     if (index >= 0 && this.sections[index].enrolled > 0) {
//       this.sections[index].enrolled--;
//       renderSections(this.sections);
//     }
//   },
// };


// function setCourseInfo(course) {
//   document.querySelector("#courseName").textContent = course.name;
//   document.querySelector("#courseCode").textContent = course.code;
// }

// function sectionTemplate(section) {
//   return `
//   <tr>
//     <td>${section.sectionNum}</td>
//     <td>${section.roomNum}</td>
//     <td>${section.enrolled}</td>
//     <td>${section.days}</td>
//     <td>${section.instructor}</td>
//   </tr>`;
// }

// function renderSections(sections) {
//   document.querySelector("#sections").innerHTML = sections
//     .map(sectionTemplate)
//     .join("");
// }

// // Button listeners
// document.querySelector("#enrollStudent").addEventListener("click", () => {
//   const sectionNum = document.querySelector("#sectionNumber").value;
//   aCourse.enrollStudent(sectionNum);
// });

// document.querySelector("#dropStudent").addEventListener("click", () => {
//   const sectionNum = document.querySelector("#sectionNumber").value;
//   aCourse.dropStudent(sectionNum);
// });

// // Display
// setCourseInfo(aCourse);
// renderSections(aCourse.sections);


// This is the final Version of the JS code

const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 250",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro Ploss",
    },
    {
      sectionNum: 2,
      roomNum: "STC 255",
      enrolled: 28,
      days: "MWF",
      instructor: "Sis Anderson",
    },
  ],

  // one in all update method
  updateEnrollment: function(sectionNum, change) {
    const index = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (index >= 0) {
      this.sections[index].enrolled += change;

      // makes it so theres no negative enrollment
      if (this.sections[index].enrolled < 0) {
        this.sections[index].enrolled = 0;
      }

      renderSections(this.sections);
    }
  },
};

// course info (title & code)
function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

// Template <tr>
function sectionTemplate(section) {
  return `
  <tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
}

// Renders table
function renderSections(sections) {
  document.querySelector("#sections").innerHTML =
    sections.map(sectionTemplate).join("");
}

// Button enroll student
document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.updateEnrollment(sectionNum, +1);
});

// Button drop student
document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.updateEnrollment(sectionNum, -1);
});

// Initialize
setCourseInfo(aCourse);
renderSections(aCourse.sections);
