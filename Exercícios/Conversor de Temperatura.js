/* Exercício: Conversor de Temperatura
  Converta temperatura de Celsius para Fahrenheit
  Receba um número como parâmetro (temperatura em Celsius)
  Retorne a temperatura convertida em Fahrenheit
  Requisitos:
  Use arrow function
  Use template string para a mensagem de retorno
  Faça a verificação se o parâmetro é um número válido
  Fórmula de conversão:
  fahrenheit = (celsius * 9/5) + 32
  ​
  Exemplo de como testar:
  converterTemperatura(0);  // Deve retornar 32°F
  converterTemperatura(25); // Deve retornar 77°F
  converterTemperatura("teste"); // Deve retornar mensagem de erro
  ​
  Dicas:
  Use typeof para verificar se o parâmetro é um número
  Inclua o símbolo °F no resultado
  Retorne uma mensagem de erro se o parâmetro for inválido */

const converterTemperatura = (celsius) => {
  if (typeof celsius === "number") {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return `${fahrenheit.toFixed(1)}ºF`;
  } else {
    return "Dados inválidos";
  }
};

console.log(converterTemperatura(0));
console.log(converterTemperatura(25));
console.log(converterTemperatura("teste"));
