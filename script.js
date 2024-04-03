let darkmode = document.querySelector("#darkmode");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

darkmode.addEventListener("click", modechange);
function modechange() {
  if (darkmode.classList.contains("bx-moon")) {
    document.body.classList.add("active");
    darkmode.classList.replace("bx-moon", "bx-sun");
  } else {
    document.body.classList.remove("active");
    darkmode.classList.replace("bx-sun", "bx-moon");
  }
}