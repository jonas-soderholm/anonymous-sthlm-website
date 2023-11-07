//Header
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(`Clicked on "${link.textContent}" link`);
    if (hamburger.classList.contains("active")) {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 400 && hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

//Startup animation
document.addEventListener("DOMContentLoaded", (event) => {
  const overlay = document.getElementById("overlay");
  const animatedLetter = document.getElementById("animatedLetter");
  const letters = "ANONYMOUS".split("");
  let currentLetterIndex = 0;
  let delayAfterA = 700;

  const animateLetter = () => {
    if (currentLetterIndex < letters.length) {
      animatedLetter.textContent = letters[currentLetterIndex++];
      if (animatedLetter.textContent === "A") {
        setTimeout(animateLetter, delayAfterA);
      } else {
        setTimeout(animateLetter, 175);
      }
    } else {
      setTimeout(() => {
        typeOutSTHLM();
      }, 150);
      overlay.style.transition = "opacity 1.3s ease-in-out";
      overlay.style.opacity = "0";
    }
  };

  const typeOutSTHLM = () => {
    const wordToSpell = "STHLM";
    let index = 0;
    const typeOutLetters = () => {
      if (index < wordToSpell.length) {
        animatedLetter.textContent += wordToSpell[index];
        index++;
        setTimeout(typeOutLetters, 125);
      }
    };
    animatedLetter.textContent = "";
    typeOutLetters();
  };

  setTimeout(() => {
    const mainButtons = document.querySelector(".mainButtons");
    mainButtons.style.opacity = 1;
  }, 3000);

  animateLetter();
});
