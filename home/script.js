document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  });
});

function calculateAge() {
  var currentDate = new Date();

  var birthYear = 1990;

  var age = currentDate.getFullYear() - birthYear;

  document.getElementById("age").innerHTML = age;
}

function assignRandomColors() {
  var h1Elements = document.querySelectorAll("#about .about-details h1");

  for (var i = 0; i < h1Elements.length; i++) {
    var randomColor = getRandomColor();

    h1Elements[i].style.color = randomColor;
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var techStack = [
  "HTML",
  "CSS",
  "Javascript",
  "Git",
  "Bootstrap",
  "Tailwind CSS",
  "ReactJS",
  "VueJS",
  "NodeJS",
  "ExpressJS",
  "MySQL",
  "MongoDB",
  "Github",
  "NextJS",
  "Firebase",
  "Typescript",
  "React Native",
  "NuxtJS",
];

function createTechStack() {
  var skillsGrid = document.getElementById("skills-grid");

  for (var i = 0; i < techStack.length; i++) {
    var skillItem = document.createElement("div");
    skillItem.classList.add("skill-item");
    skillItem.textContent = techStack[i];
    skillsGrid.appendChild(skillItem);
  }
}

window.onload = function () {
  createTechStack();
  assignRandomColors();
  calculateAge();
};
