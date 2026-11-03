const btn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});
