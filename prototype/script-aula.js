function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
}

const p1 = new Pessoa('Leonardo', 25);

const listaAnimais = ['Cão', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  }
}