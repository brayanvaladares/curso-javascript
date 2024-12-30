/*
  Inversor de String
  Crie uma função que:
  Receba uma string
  Retorne a string invertida

  inverterString("hello"); // Deve retornar: "olleh"
*/

const inverterString = (str) => {
  if (typeof str === "string") {
    return `${str.split("").reverse().join("").toLowerCase()}`;
  } else {
    return "Dados Inválidos";
  }
};

console.log(inverterString("Hello!"));
