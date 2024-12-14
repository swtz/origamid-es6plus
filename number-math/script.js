const somaFn = new Function('num1', 'num2', 'return num1 + num2');

function carDescription(owner) {
    return this.nome + ' ' + this.marca + ' from ' + owner;
};

const car = {
    0: "Savero",
    marca: "VW"
}

carDescription.call(car, 'Lüders'); // 'Savero VW from Lüders'
carDescription.call({ nome: '350i', marca: 'BMW' }, 'Kristian'); // '350i BMW from Kristian'

// const carros = ['Ford', 'Honda', 'VW'];
// const frutas = ['Maçã', 'Pêra', 'Manga'];

// carros.forEach.call(frutas, (item) => {
//     console.log(item);
// }); // Maçã, Pêra, Manga

function Dom(seletor) {
    this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function (classe) {
    this.element.classList.add(classe);
};

const ul = new Dom('ul');
const li = new Dom('li');
const body = new Dom('body');

Dom.prototype.ativo.call(body, 'ativo'); // uso mais correto
// o objeto deve ser "parecido" com o objeto original do método 'call'

const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
frutas.pop();

// console.log(frutas);

const allLi = document.querySelectorAll('li');
const arrayTextLi = Array.prototype.filter.call(allLi, (item) => {
    return item.innerText === 'Item 3';
});

console.log(arrayTextLi);
