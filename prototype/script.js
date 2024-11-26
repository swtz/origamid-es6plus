function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}



Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
}

const p1 = new Pessoa('Leonardo', 25);

// console.log(Pessoa.prototype);
console.log(p1);