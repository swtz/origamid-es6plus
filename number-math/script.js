const frutas = ['Maçã', 'Pêra', 'Romã'];

const temUva = frutas.some((item) => {
    return item === 'Uva';
})

// console.log(temUva);

const tem4Letras = frutas.every((item) => {
    return (item.length === 4);
});

// console.log(tem4Letras);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every(n => n >= 5);

// console.log(maiorQue3);

const findNumber = numeros.find(item => item >= 89); // 101
const findIndexApple = frutas.findIndex(item => item.toLocaleLowerCase() === 'apple'); // -1

// console.log(findNumber);

const listaNumeros = numeros.filter(n => n <= 22); // [6, 22]

console.log(listaNumeros);
