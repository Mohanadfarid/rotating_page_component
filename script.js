const content = document.querySelector(".container");
const open_btn = document.querySelector("#open-btn");
const close_btn = document.querySelector("#close-btn");
const ul = document.querySelector("ul");

open_btn.addEventListener("click", () => {
  content.classList.add("show-nav");
  ul.classList.add("active-nav");
});

close_btn.addEventListener("click", () => {
  content.classList.remove("show-nav");
  ul.classList.remove("active-nav");
});
