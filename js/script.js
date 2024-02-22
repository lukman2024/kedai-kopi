//toggle class active
const navbaNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbaNav.classList.toggle("active");
};

//click di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbaNav.contains(e.target)) {
    navbaNav.classList.remove("active");
  }
});
