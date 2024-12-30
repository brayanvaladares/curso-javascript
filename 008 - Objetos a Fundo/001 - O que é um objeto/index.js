/*
  Objeto: Tenis (Propriedade) "cadarço", "palmilha"
  Objeto: Celular (Propriedade)
  Objeto: Drone (Propriedade)

  Propriedades / Atributos / Funcionalidades
*/

let tenis = {
  tipo: "Tenis de Corrida",
  cadarco: "G",
  estoque: false,
  tamanho: {
    palmilha: 39,
    tenis: 40,
    caixa: {
      largura: 35,
      altura: 40,
      profundidade: 10,
    },
  },
  marcaArrayValores: ["Nike", "Adidas", "etc"],

  marcaArrayObjetos: [
    {
      nome: "Nike",
    },
    {
      nome: "Adidas",
    },
    {
      nome: "Etc",
    },
  ],
  getMarcArrayValores: function (param) {
    return this.marcaArrayObj[param];
  },
  getMarcArrayObj: function (param) {
    return this.marcaArrayObj[param].nome;
  },
};

console.log(tenis);
console.log(tenis.tipo);
console.log(tenis.tamanho);
