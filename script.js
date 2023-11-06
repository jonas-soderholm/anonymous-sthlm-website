const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu"); // Change to ".nav-menu"

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(`Clicked on "${link.textContent}" link`);
  });
});
