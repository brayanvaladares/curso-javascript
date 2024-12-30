/* function Name(name, sobrenome) {
  this.name = name;

  this.sobreNome = () => {
    const nomeCompleto = `${this.name} ${sobrenome}`;
    return nomeCompleto;
  };
}

const brayan = new Name("Brayan", "Valadares");

console.log(brayan.sobreNome()); */

function Calculadora() {
  this.soma = (num1, num2) => {
    return `${num1 + num2}`;
  };
  this.subtracao = (num1, num2) => {
    return `${num1 - num2}`;
  };
}

const calculadora = new Calculadora();

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(7, 4));
