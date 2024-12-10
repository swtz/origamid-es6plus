// #1
const max = 2000;
const min = 1050;
const randNumber = function () { return Math.random() * (max - min + 1) + min };

// for (i=0; i < 500; i++) {
//     console.log(Math.floor(randNumber()));
// };


// #2
const numeros = '4, 5, 20, 8, 9';
const arrayStr = numeros.split(',');
// const arrayNum = [];

// arrayStr.forEach((item) => {
//     arrayNum.push(Number.parseInt(item));
// })

// console.log(Math.max(...arrayNum));

// coach-luiz: Math.max(...arrayStr); // 20 | O método já identifica o algarismo.


// #3
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
const arrayTemp = [];
let soma = 0;

function calcPrice(numbers) {
    numbers.forEach((item) => {
        const cleanedNum = item.toLocaleLowerCase().replace('r$ ', '').trim().replace(',', '.');
        const roundedNum = Math.round(Number.parseFloat(cleanedNum));
        soma += roundedNum;

        arrayTemp.push(roundedNum);
    })

    console.log('Vetor: ', arrayTemp);

    return `Soma do vetor: ${soma}`;
}
