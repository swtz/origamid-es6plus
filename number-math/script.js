const carros = ['Ford', 'Fiat', 'Honda'];

const retornoForEach = carros.forEach((item, index, array) => {
    console.log(item);
});

console.log('ForEach: ', retornoForEach);

const pessoas = ['Leonardo', 'Laura', 'Maria', 'Giovana', 'Letícia'];

const retornoMap = pessoas.map((item, index, array) => {
    return item.toUpperCase();
});

console.log(retornoMap);

const numbers = [45, 33, 2, 6, 88, 3];

const numbersx2 = numbers.map((item) => {
    return item * 2;
});

console.log(numbersx2);

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
];

// #1
// function getMinutes(aula) {
//     return aula.min;
// };


//#2
const getMinutes = aula => aula.min;

const classDuration = aulas.map(getMinutes);

console.log(classDuration);
