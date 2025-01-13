const myArray = [1, 2, 3, 4, 5, 6];
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

// for ([inicialização]; [condição]; [expressão final])
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// For Of
for (let item of myArrayObj) {
  console.log(item.nome, item.sobreNome);
}

//For In
const obj = { nome: "Dener", sobreNome: "Troquatte" };

for (let item in obj) {
  console.log(item);
}
