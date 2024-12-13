const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
    return acumulador + item;
}, 0);

// console.log(reduceAulas);

const numeros = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros.reduce((prev, current) => {
    return prev < current ? current : prev;
});

console.log(maiorValor);