// IIFE = Immediately Invoked Function Expression
// Função auto invocada

(function () {
  console.log("Será executado na hora!");
  console.log("Foge do escopo mais abrangente!");
})();

// Quais os benefícios de usar IIFE?
// 1. Isolamento de escopo
// 2. Não poluir o escopo global
// 3. Não ser acessível fora do escopo da função
