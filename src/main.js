// alert('Welcome to Urban Harvest!');

import './style.css';

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const themeToggle = document.getElementById("theme-toggle");

/* Mobile menu toggle */
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expanded);
});

/* Dark mode toggle */
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

