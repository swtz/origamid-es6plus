// Efeitos no DOM
const div = document.querySelector('[data-color]');

div.dataset.fontSize = '6rem';

console.log(div.dataset); // { color: 'blue' }
console.log(div.getAttributeNames());