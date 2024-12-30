/* 
  Calculadora de IMC
  Crie uma função que:
  Receba peso e altura
  Calcule o IMC (peso / altura²)

  calcularIMC(70, 1.75); // Deve retornar o IMC calculado
*/

const calcularIMC = (peso, altura) => {
  if (typeof peso === "number" && peso > 0 && typeof altura === "number" && altura > 0) {
    let IMC = peso / (altura * altura);
    return `IMC: ${IMC.toFixed(2)}`;
  } else {
    return "Dados Inválidos";
  }
};

console.log(calcularIMC(70, 1.75));
