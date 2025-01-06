// #1
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles;


// #2
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoInativo, cursoAtivo] = [cursoAtivo, cursoInativo];


// #3
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const { cor: bobCor } = cachorro;
