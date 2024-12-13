// #1
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const someResult = arrayCursos.map((item, index) => {
    const objCurso = {};
    objCurso.titulo = item.querySelector('h1').innerText;
    objCurso.descricao = item.querySelector('p').innerText;
    objCurso.horas = item.querySelector('.aulas').innerText;
    objCurso.aulas = item.querySelector('.horas').innerText;
    return objCurso;
});

console.log(someResult);

// #2
const numeros = [3, 44, 333, 23, 122, 322, 33];

const biggerThanHundred = numeros.filter(n => n > 100);

console.log(biggerThanHundred);

// #3
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const baixoExists = instrumentos.some(i => i.toLowerCase() === 'baixo');

console.log(baixoExists);

// #4
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]

const totalPrice = compras.reduce((prev, current, index) => {
    const itemPrice = +current.preco.toLowerCase().trim().replace('r$ ', '').replace(',', '.');
    return prev + itemPrice;
}, 0);

console.log(totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
