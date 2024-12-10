// #1
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const firstValue = comidas.shift();
const lastValue = comidas.pop();

comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');

console.log(comidas);


// #2
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

estudantes.sort();
estudantes.reverse();
estudantes.includes('Joana');
estudantes.includes('Juliana');


// #3
let html = `<section>
    <div>Sobre</div>
    <div>Produtos</div>
    <div>Contato</div>
</section>`;

let newHtml = html.split('section').join('ul').split('div').join('li');


// #4
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const ogCarros = carros.slice();
carros.pop();
