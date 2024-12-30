/* # Exercício: Calculadora de Média com Validação

Crie um programa em JavaScript que:

- Declare uma função chamada `calcularMedia` que recebe três notas como parâmetros
- A função deve verificar se todos os parâmetros são números válidos (use verificação de tipo)
- Se algum parâmetro não for número, retorne uma mensagem de erro apropriada
- Se todos os parâmetros forem válidos, calcule e retorne a média das três notas
- Se a média for maior ou igual a 7, retorne também uma mensagem "Aprovado", caso contrário, retorne "Reprovado"

Requisitos adicionais:

- Use arrow function
- Implemente operador ternário para a verificação de aprovação
- Use template strings para formar a mensagem de retorno

Teste sua função com diferentes combinações de valores, incluindo números e outros tipos de dados.

*/

const calcularMedia = (nota1, nota2, nota3) => {
  if (typeof nota1 === "number" && typeof nota2 === "number" && typeof nota3 === "number") {
    const media = (nota1 + nota2 + nota3) / 3;
    return `Você foi ${media >= 7 ? "aprovado" : "reprovado"}.\nMédia Final: ${media.toFixed(2)}`;
  }
  return "Dados inválidos";
};

console.log(calcularMedia(9, 5, 7));
