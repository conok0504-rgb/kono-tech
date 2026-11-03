const btn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

btn.addEventListener("click", function () {
  document.body.classList.toggle("light");
});

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});
