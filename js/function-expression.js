// Exercícios
// #1
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// #2
var global = 'foo'; // like -> window.nome = 'foo';
(function () {
  var global = 'bar'; // não vai pro objeto global 'window'
  console.log(global); // bar
})();

// #3
const active = callback => callback(2, 2);
active((a, b) => {
  console.log(a + b);
});
