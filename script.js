//Header

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

document.addEventListener("DOMContentLoaded", (event) => {
  const overlay = document.getElementById("overlay");
  const animatedLetter = document.getElementById("animatedLetter");
  const letters = "ANONYMOUS".split("");
  let currentLetterIndex = 0;

  const animateLetter = () => {
    if (currentLetterIndex < letters.length) {
      animatedLetter.textContent = letters[currentLetterIndex++];
      setTimeout(animateLetter, 250); // Continue to the next letter after a delay
    } else {
      // Once the animation is complete, fade out the overlay
      overlay.style.transition = "opacity 1s ease-in-out";
      overlay.style.opacity = "0";
      setTimeout(() => (overlay.style.display = "none"), 1000); // Remove the overlay after the fade-out is complete
    }
  };

  // Start the animation
  animateLetter();
});
