// console.log(Math.max.apply(null, [3, 4, 6, 1, 43, 34, 42, 56, 7])); // arg0: Array
// console.log(Math.max.call(null, 3, 4, 6, 1, 43, 34, 42, 56, 7)); // arg0: ...Array

const li = document.querySelectorAll('li');

const filteredLi = Array.prototype.filter.bind(li, (item) => {
    return item.classList.contains('ativo');
});

console.log(filteredLi); // retorna o corpo da fn com o novo this

const $ = document.querySelectorAll.bind(document); // encurtador de fn

function imc(altura, peso) {
    return +(peso / (altura * altura)).toFixed(2);
};

const imc180 = imc.bind(null, 1.80);

console.log(imc(1.60, 80));
console.log(imc180(80));

// fazendo 'bind' de uma fn setando um argumento fixo
