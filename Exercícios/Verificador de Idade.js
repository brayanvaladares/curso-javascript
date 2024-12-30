/* Exercício: Verificador de Idade
Receba uma idade como parâmetro
Verifique se a pessoa é maior ou menor de idade (18 anos)
Retorne uma mensagem apropriada
Requisitos:
Use arrow function
Use operador ternário
Use template string para a mensagem

Exemplo de como testar:
  verificarIdade(20); // Deve retornar que é maior de idade
  verificarIdade(15); // Deve retornar que é menor de idade
​
Dicas:
Use o operador >= para comparar a idade com 18
A mensagem pode ser "Maior de idade" ou "Menor de idade" */

const verificarIdade = (idade) => {
  return `${idade >= 18 ? "Maior de idade" : "Menor de idade"}`;
};

console.log(verificarIdade(20));
console.log(verificarIdade(15));
