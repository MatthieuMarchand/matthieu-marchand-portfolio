const nav = document.querySelector("nav");
const header = document.querySelector("header");

const toggleNav = () => {
  nav.classList.toggle("hidden");
  header.classList.toggle("active");
};
