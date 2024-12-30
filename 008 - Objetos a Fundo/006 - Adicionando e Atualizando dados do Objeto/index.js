let tenis = {
  tamanho: 45,
  estoque: true,
};

tenis.tamanho = 42;
tenis.false = 42;
/* tenis.preco = "R$ 42" */
tenis["preco"] = "R$ 42";
console.log(tenis);
console.log(tenis["preco"]);
