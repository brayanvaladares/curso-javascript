/* Exercício: Verificador de Números

Crie uma função que:

- Receba um array de valores como parâmetro
- Verifique se todos os elementos são números
- Se encontrar elementos que não são números, retorne quais posições do array contêm dados inválidos
- Se todos forem números, retorne:
- O maior número
- O menor número
- A soma de todos os números

Requisitos:

- Use arrow function
- Utilize template strings para as mensagens
- Faça verificação de tipo usando typeof */

const verificador = (conjuntoNumerico) => {
  // Primeira parte: verifica se são todos números
  let todosSaoNumeros = true;
  for (let num of conjuntoNumerico) {
    if (typeof num !== "number") {
      todosSaoNumeros = false;
      break;
    }
  }

  // Se todos forem números, faz os cálculos
  if (todosSaoNumeros) {
    const maior = Math.max(...conjuntoNumerico); // Encontra o maior
    const menor = Math.min(...conjuntoNumerico); // Encontra o menor

    let soma = 0;
    for (let num of conjuntoNumerico) {
      soma += num; // Soma todos os números
    }

    return `Maior: ${maior}\nMenor: ${menor}\nSoma: ${soma}`;
  } else {
    // Se houver valores inválidos, mostra as posições
    let mensagem = "Valores inválidos encontrados nas posições:\n";
    conjuntoNumerico.forEach((num, index) => {
      if (typeof num !== "number") {
        mensagem += `Índice ${index}: Não é um número\n`;
      }
    });
    return mensagem;
  }
};

console.log(verificador([1, "texto", 3, true, 5])); // Array com valores inválidos
