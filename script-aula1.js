// #1
const pessoa = {
  nome: 'Leonardo',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

// #1 my solve
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}

const p1 = new Pessoa('João', 20);
const p2 = new Pessoa('Maria', 25);
const p3 = new Pessoa('Bruno', 15);

// #2 my solve
function Dom(element) {
  const elementsList = document.querySelectorAll(element);
  this.elements = elementsList;
  this.addClass = function (classe) {
    elementsList.forEach(function (item) { item.classList.add(classe) });
  };
  this.removeClass = function (classe) {
    elementsList.forEach((item) => item.classList.remove(classe));
  };
}

const nodeListLi = new Dom('li');
nodeListLi.addClass('ativar');