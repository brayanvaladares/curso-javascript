/* ## Calculadora de Desconto

- Receba o preço original e a porcentagem de desconto
- Retorne o valor com desconto
e
  calcularDesconto(100, 10); // Deve retornar: "Preço com desconto: R$ 90.00"
// */

const calcularDesconto = (preco, desconto) => {
  if (typeof preco === "number" && typeof desconto === "number") {
    preco -= preco * (desconto / 100);
    return `Preço com desconto: R$${preco.toFixed(2)}`;
  } else {
    return "Dados inválidos";
  }
};

console.log(calcularDesconto(200, 20));
