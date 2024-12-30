const tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
  secret: 123456,
  n: 5,
  link: { a: "a", b: { c: "C" } },
};

// hasOwnProperty | propertyname in Tenis

if (tenis.hasOwnProperty("tamanho")) {
  console.log("Existe tamanho");
} else console.log("Não existe tamanho");

console.log(tenis.hasOwnProperty("tamanho"));
console.log("tamanho" in tenis);
