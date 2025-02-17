/* 
  O que é uma função
  É um conjunto de instruções que executa uma tarefa ou calcula um valor 
*/

// 1 - Function Declaration
function isValidDeclaration() {
  const soma = 1 + 2;

  if (soma === 3) {
    return true;
  }
  return false;
}

//2 - Function Expression
const isValidExpression = function () {};

// 3 - Arrow Function
const isValidArrow = () => {
  const multiplicacao = 2 * 2;
  return multiplicacao;
};
