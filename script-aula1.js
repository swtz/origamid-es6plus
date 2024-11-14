// Objetos -> 0401 Constructor Functions 2

function Produto(nome, preco, taxa) {
  const precoFinal = preco * taxa;
  this.nome = nome;
  this.preco = precoFinal;
}

const p1 = new Produto('abacate', 14, 1.5);
console.log(p1.preco);