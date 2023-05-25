// Scroll to section when navbar link is clicked
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  });
});
