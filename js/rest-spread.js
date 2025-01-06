// #1
// function createButton(background, color) {
//   background = background || 'blue';
//   if (color === undefined) {
//     color = 'red';
//   }
//   const btnElement = document.createElement('button');
//   btnElement.style.background = background;
//   return btnElement;
// }
// const redBtn = createButton();

function createBtn(background = 'blue', color = 'red') {
  const btnElement = document.createElement('button');
  btnElement.style.background = background;
  btnElement.style.color = color;
  return btnElement;
}
const btnRed = createBtn();


// #2
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
comidas.push(...frutas);
console.log(comidas);
