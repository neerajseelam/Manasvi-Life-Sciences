// Select the elements

const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggle = selectElement("#menu-toggle");
let body = selectElement("body");

menuToggle.addEventListener("click", () => {
  body.classList.toggle("open");
});

// Toggle menu when clicked on the menu items

let menuItems = document.getElementsByClassName("navbar__link");

for (let index = 0; index < menuItems.length; index++) {
  const menuItem = menuItems[index];
  menuItem.addEventListener("click", () => {
    body.classList.remove("open");
  });
}

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

// Dark Light Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

themeButton.addEventListener("click", () => {
  body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
});
