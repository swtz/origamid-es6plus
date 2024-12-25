import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimals() {
  async function fetchAnimais(url) {
    const animaisRes = await fetch(url);
    const animaisJson = await animaisRes.json();
    const gridNumbers = document.querySelector('.grid-numbers');

    animaisJson.forEach(animal => {
      const newDiv = createAnimal(animal);
      gridNumbers.appendChild(newDiv); // excluir static content do html
    });
    initAnimaNumeros();
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3>\n<span data-numero>${animal.total}</span>`;

    return div;
  }
  fetchAnimais('./animais-api.json')
}
