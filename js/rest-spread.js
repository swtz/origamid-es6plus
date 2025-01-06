// Rest operator
// function showConsole(name, age, ...argList) {
//   argList.forEach(arg => {
//     console.log(arg);
//     console.log(arguments);
//   })
//   return `Nome: ${name} | Idade: ${age}`;
// }
// showConsole('Leonard', 25, { genre: true, pretty: false });


// Spread operator
const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [{ ...frutas }, 'Couve-flor', ...legumes];
console.log(comidas);

// Exemplo de como converter um array-like em array com '...'
const btns = document.querySelectorAll('button');
const arrbtns = [...btns];
console.log(arrbtns); // [object Array]
