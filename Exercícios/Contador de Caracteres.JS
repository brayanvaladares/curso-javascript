/* 
  Contador de Caracteres
  Crie uma função que:
  Receba uma string
  Retorne a quantidade de caracteres
  contarCaracteres("JavaScript"); // Deve retornar: "10 caracteres"
*/

const contarCaracteres = (string) => {
  if (typeof string === "string") {
    return `${string.length} caracteres`;
  } else {
    return "Dados Inválidos";
  }
};

console.log(contarCaracteres("JavaScript"));
