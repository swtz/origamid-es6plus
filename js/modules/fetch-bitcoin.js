export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(result => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerHTML = (1000 / result.BRL.sell).toFixed(4);
    }).catch(error => {
      console.log(Error(error))
    })
}
