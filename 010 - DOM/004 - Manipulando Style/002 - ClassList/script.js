"use strict";

const h1 = document.querySelector("h1");
h1.classList.add("active");
// h1.classList.remove("active");
h1.classList.toggle("teste2");

if (h1.classList.contains("active")) {
  // alert("Existe a classe active");
}
console.log(h1);
