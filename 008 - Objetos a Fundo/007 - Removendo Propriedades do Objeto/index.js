let tenis = {
  tamanho: 45,
  estoque: true,
};

delete tenis.estoque;

console.log(tenis);

tenis.estoque = true;

console.log(tenis);
