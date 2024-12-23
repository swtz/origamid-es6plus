// #1
const inputCep = document.getElementById('cep');
const btnCep = document.querySelector('input[type="button"]');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(result => resultadoCep.innerText = result)
}

// #2
const p = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(result => {
      const brl = result.BRL.buy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      p.innerText = brl;
    })
}
// setInterval(fetchBtc, 30000);

// #3
const pJoke = document.querySelector('.joke');
const btnJoke = document.querySelector('.next');

btnJoke.addEventListener('click', getJoke)

function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(result => pJoke.innerText = result.value)
}

getJoke();