const myArrayObj = [
  {
    nome: "Dener",
    sobreNome: "Troquatte",
  },
  {
    nome: "Nay",
    sobreNome: "Troquatte",
  },
  {
    nome: "José",
    sobreNome: "Troquatte",
  },
];

// Serve para iterar os valores de um array

myArrayObj.forEach((item, index) => {
  if (item.nome === "Nay") {
    return console.log("Alerta");
  }
  console.log(index, item.nome);
});
