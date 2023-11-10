// ------------------- NAVBAR -------------------

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

    let sectionSelector = "";
    let isAboutPage = window.location.pathname.includes("about.html");

    switch (link.textContent.trim()) {
      case "Resources":
        sectionSelector = ".movies";
        break;
      case "Why vegan?":
        sectionSelector = ".movies";
        break;
      case "Contact":
        sectionSelector = ".contact-container";
        break;
      case "Join us":
        sectionSelector = ".contact-container";
        break;
      case "About us":
        window.location.href = "about.html";
        return;
      default:
        console.error("No section defined for: " + link.textContent);
        return;
    }

    if (isAboutPage) {
      sessionStorage.setItem("scrollToSection", sectionSelector);
      window.location.href = "index.html";
    } else if (sectionSelector) {
      const sectionToScroll = document.querySelector(sectionSelector);
      if (sectionToScroll) {
        sectionToScroll.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Section not found for: " + link.textContent);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sectionToScroll = sessionStorage.getItem("scrollToSection");
  if (sectionToScroll) {
    sessionStorage.removeItem("scrollToSection"); // Clear the flag
    const section = document.querySelector(sectionToScroll);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900 && hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    console.log("SMALL");
  }
});

window.addEventListener(
  "scroll",
  () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      console.log("Menu closed due to scroll down");
    }
  },
  false
);

// ------------------- STARTUP ANIMATION -------------------

document.addEventListener("DOMContentLoaded", (event) => {
  const overlay = document.getElementById("overlay");
  const animatedLetter = document.getElementById("animatedLetter");
  const letters = "ANONYMOUS".split("");
  let currentLetterIndex = 0;

  const animateLetter = () => {
    animatedLetter.textContent = letters[currentLetterIndex++];

    setTimeout(() => {
      typeOutSTHLM();
    }, 500);

    setTimeout(() => {
      overlay.style.transition = "opacity 1.3s ease-in-out";
      overlay.style.opacity = "0";
    }, 1350);
  };

  const typeOutSTHLM = () => {
    const wordToSpell = "ANONYMOUS";
    let index = 0;
    const typeOutLetters = () => {
      if (index < wordToSpell.length) {
        animatedLetter.textContent += wordToSpell[index];
        index++;
        setTimeout(typeOutLetters, 100);
      }
    };
    animatedLetter.textContent = "";
    typeOutLetters();
  };

  setTimeout(() => {
    const mainButtons = document.querySelector(".mainButtons");
    mainButtons.style.opacity = 1;
  }, 1350);

  animateLetter();
});

// ------------------- CALCULATOR -------------------

var modal = document.getElementById("myModal");
var btn = document.querySelector(".calculateButton");

var animals = document.getElementById("animals");
var water = document.getElementById("water");
var forest = document.getElementById("forest");
var grain = document.getElementById("grain");
var co2 = document.getElementById("co2");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

btn.onclick = function () {
  var yearsInput = document.getElementById("years").value;
  var monthsInput = document.getElementById("months").value;
  var daysInput = document.getElementById("days").value;

  if (yearsInput == "") {
    yearsInput = 0;
  }
  if (monthsInput == "") {
    monthsInput = 0;
  }
  if (daysInput == "") {
    daysInput = 0;
  }

  yearsInput = yearsInput * 365;
  monthsInput = monthsInput * 30;
  daysInput = daysInput * 1;

  daysTotal = yearsInput + monthsInput + daysInput;

  if (daysTotal == 0) {
    return;
  }

  modal.style.display = "block";

  calculateSaved(daysTotal);
};

function calculateSaved(days) {
  console.log(days);

  var waterResult = 4163.9 * daysTotal;
  var forestResult = 2.8 * daysTotal;
  var co2Result = 9.1 * daysTotal;
  var grainResult = 18.1 * daysTotal;
  //animals is one per day

  animals.textContent = "Animal lives: " + days;

  water.textContent =
    "Litres of water: " +
    Math.round(waterResult).toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });

  forest.textContent =
    "m2 of forest: " +
    Math.round(forestResult).toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });

  co2.textContent =
    "Kg of CO2: " +
    Math.round(co2Result).toLocaleString("en-US", { maximumFractionDigits: 2 });

  grain.textContent =
    "Kg of grain: " +
    Math.round(grainResult).toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
