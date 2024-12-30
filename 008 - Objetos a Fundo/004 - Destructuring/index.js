const tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
  secret: 123456,
  n: 5,
  link: { a: "a", b: { c: "C" } },
};

const { tamanho, estoque, marcas = "Sem marca" } = tenis;
console.log(tamanho, estoque, marcas[0]);

const { secret: randomNumber, n: avaliacoes } = tenis;

console.log(randomNumber);
console.log(avaliacoes);

const {
  link: {
    b: { c },
  },
} = tenis;
console.log(c);

console.log(tenis.link.a, tenis.link.b.c);
