"use strict";

const h1 = document.querySelector("h1");

h1.style.fontFamily = "Arial";
h1.style.backgroundColor = "#444";
h1.style.color = "#FFF";

h1.style.display = "flex";
h1.style.justifyContent = "center";

const p = document.querySelectorAll("p");

p.forEach((element) => {
  element.style.fontFamily = "Arial";
  element.style.backgroundColor = "#444";
  element.style.color = "#FFF";
  element.style.fontSize = "15px";
});
