// #1
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () { return this.nome + ' ' + this.sobrenome };

const leonardo = new Pessoa('Leonardo', 'Lüders', 25);

// #2
function ListaMetodos(construtor) {
  return construtor.prototype;
}

const nodeList = new ListaMetodos(NodeList);
const htmlCollection = new ListaMetodos(HTMLCollection);
const documentElement = new ListaMetodos(Document);

// #3
const li = document.querySelector('li');

const lista = [
  li,
  li.click,
  li.innerText,
  li.value,
  li.hidden,
  li.offsetLeft,
  li.click()
];

lista.forEach((el) => {
  console.log(el.constructor.name);
})

// #4
li.hidden.constructor.name; // String