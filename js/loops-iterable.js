// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(({ headers }) => console.log(headers));

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';
for (const fruta of frutas) {
  // console.log(fruta);
}

const btns = document.querySelectorAll('button');
for (const btn of btns) {
  btn.style.backgroundColor = 'aqua';
}

const pessoa = {
  nome: 'Leonard',
  idade: 25
}
for (const key in pessoa) {
  console.log(pessoa[key])
  // 'key' retorna as chaves ENUMERÁVEIS do objeto
  // e que não sejam símbolos.
}


const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
for (const style in btnStyles) {
  // console.log(`${style}: ${btnStyles[style]}`);
}

// loop: do / while
let i = 0;
do {
  console.log(i++)
} while (i < 10);
