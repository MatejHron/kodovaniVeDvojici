document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".navbar a");
  document.querySelector(".hamburger").addEventListener("click", () => {
    navbar.classList.toggle("opened");
    links.forEach((e) => {
      e.classList.toggle("aopened");
    });
  });
});
