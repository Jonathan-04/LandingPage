let showMenu = document.querySelector("#showMenu");
let closeMenu = document.querySelector("#closeMenu");
let navbar = document.querySelector(".items-navbar");

showMenu.addEventListener("click", () => {
  navbar.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  navbar.style.display = "none";
  document.body.style.overflow = "unset";
});
