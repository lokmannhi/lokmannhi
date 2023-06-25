let style = ["minimalist"];

const randomStyle = () => {
  var bodyElement = document.body;
  bodyElement.classList.toggle(style[Math.floor(Math.random() * style.length)]);
};

function showMe(sectionName) {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");
  const projects = document.getElementById("projects");

  switch (sectionName) {
    case "home_page":
      document
        .querySelectorAll("#about, #skills, #projects")
        .forEach((el) => (el.style.display = "none"));
      home.style.display = "block";
      break;
    case "about_me":
      document
        .querySelectorAll("#home, #skills, #projects")
        .forEach((el) => (el.style.display = "none"));
      about.style.display = "flex";
      break;
    case "skills":
      document
        .querySelectorAll("#home, #about, #projects")
        .forEach((el) => (el.style.display = "none"));
      skills.style.display = "flex";
      break;
    case "projects":
      document
        .querySelectorAll("#home, #about, #skills")
        .forEach((el) => (el.style.display = "none"));
      projects.style.display = "block";
      break;
    default:
      alert("default");
  }
}

function calculateAge() {
  var currentDate = new Date();
  var birthYear = 1990;
  var age = currentDate.getFullYear() - birthYear;
  document.getElementById("age").innerHTML = age;
}

var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 2000);
};

var techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "Bootstrap",
  "Tailwind CSS",
  "Typescript",
  "NPM",
  "ReactJS",
  "VueJS",
  "Node.js",
  "ExpressJS",
  "Github",
  "MySQL",
  "MongoDB",
  "NextJS",
  "Firebase",
  "yarn",
  "React Native",
  "NuxtJS",
  "PostgreSQL",
  "Styled-Component",
  "Gitlab",
  "Dart",
  "Flutter",
  "AWS",
  "Docker",
  "Google Cloud",
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

var incomingTechStack = ["Dart", "Flutter", "AWS", "Docker", "Google Cloud"];

function createIncomingTechStack() {
  var incomingSkillsGrid = document.getElementById("incoming-skills-grid");

  for (var j = 0; j < incomingTechStack.length; j++) {
    var incomingSkillItem = document.createElement("div");
    incomingSkillItem.classList.add("skill-item");
    incomingSkillItem.textContent = incomingTechStack[j];
    incomingSkillsGrid.appendChild(incomingSkillItem);
  }
}

window.onload = function () {
  document.getElementById("home_page").click();
};

randomStyle();
calculateAge();
responsiveSlider();
createTechStack();
createIncomingTechStack();
