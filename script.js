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
      skills.style.display = "block";
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

window.onload = function () {
  document.getElementById("home_page").click();
  randomStyle();
  calculateAge();
};
