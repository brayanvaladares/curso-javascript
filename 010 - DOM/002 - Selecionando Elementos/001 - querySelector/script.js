"use strict";

const h1 = document.querySelector("h1"); // TAG HTML
const classP = document.querySelector(".paragrafo strong");
const idP = document.querySelector("#paragrafo");

console.log(idP);
console.log(classP);
console.log(h1);

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
  title.innerText = timer;
  timer++;
}, 1000);
