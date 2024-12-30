function tenis(t, estoque, preco) {
  return {
    tamanho: t, // caso o nome seja diferente, tem q declarar
    estoque, // Ja foi declarado
    preco,
  };
}

console.log(tenis(35, true, "R$ 35"));

const tamanho = 35;
const estoque = true;
const preco = "R$ 35";

const Tenis2 = {
  tamanho,
  estoque,
  preco,
};

/// Metodos

const Tenis3 = {
  getTamanho() {
    return 35;
  },
};

console.log(Tenis3.getTamanho());
