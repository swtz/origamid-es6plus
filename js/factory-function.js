// "use strict";

// function createButton(text) {
//   const secretWord = 'raioForteCaiuOntemFazendoGrandeEstrago';

//   function element() {
//     const btnElement = document.createElement('button');
//     btnElement.innerText = text;
//     return btnElement;
//   }

//   return Object.freeze({
//     text,
//     element
//   })
// }
// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) // "se o usuário não passar o 'new' na frente"
    return new Pessoa(nome); // "acessa novamente o construtor, porém, agora, com o 'new' na frente"
  this.nome = nome // segue o código de criação do objeto
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');
console.log(designer); // Pessoa: {nome: 'André'};