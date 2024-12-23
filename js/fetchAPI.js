// #1
const form = document.querySelector('#cepform');
const btn = form.querySelector('button');
const div = document.querySelector('[data-show]');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const inputValue = form.cep.value;
  const cep = fetch(`https://viacep.com.br/ws/${inputValue}/json/`);
  cep.then(response => response.text().then(result => {
    div.innerText = result;
  })
  )
}

// #2
// const span = div.querySelector('span');

// setInterval(() => {
//   const bitcoin = fetch('https://blockchain.info/ticker')


//   bitcoin.then(response => response.json().then(result => {
//     getBitcoinPrice(result);
//   }))
// }, 1000)

// let i = 0;

// function getBitcoinPrice(result) {
//   const brl = result.BRL;
//   const buyPrice = brl.buy;
//   const cleanPrice = buyPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//   span.innerText = cleanPrice;
//   const p = document.createElement('p');
//   p.innerText = i++ + 'seg';
//   span.appendChild(p);
// }


// #3
// const h3 = div.querySelector('h3');
// const next = div.querySelector('button');
// next.addEventListener('click', handleClick);

// function handleClick() {
//   const data = fetch('https://api.chucknorris.io/jokes/random');
//   data.then(response => response.json().then(result => {
//     const piada = result.value;
//     h3.innerText = piada;
//   }))
// }

// next.click();