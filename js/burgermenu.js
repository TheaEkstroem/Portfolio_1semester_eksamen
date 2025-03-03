const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".nav_links");
const links = document.querySelectorAll(".nav_links li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
