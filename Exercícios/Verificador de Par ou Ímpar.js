/*
  Verificador de Par ou Ímpar
  Crie uma função que:
  Receba um número
  Retorne se é par ou ímpar

  verificarParImpar(7); // Deve retornar: "Ímpar" 
*/

const VerificarParImpar = (x) => {
  let resto = x % 2;
  return `${resto <= 0 ? "Par" : "Ímpar"}`;
};

console.log(VerificarParImpar(7)); // "Ímpar"
console.log(VerificarParImpar(4)); // "Par"
