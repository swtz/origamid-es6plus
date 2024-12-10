// Algumas maneiras de criar Arrays

Array.of({nome: 'Leonardo', idade: 25}, {}, {}, {});
Array('Leonardo');

// mutator methods

const arr = ['Pedro', 'Paulo', 'João', 'Lucas'];
arr.sort(); // organiza caractere por caractere com base na tabela unicode
arr.unshift('Laura', 'Maria'); // add at the beginning => arr.length
arr.push('Leonardo'); // add at the final => arr.length
arr.shift(); // remove the first item => removed item
arr.pop(); // remove the last item => removed item
arr.reverse(); // inverte a ordem do array => new Array

const arr2 = ['Fulano', 'Sicrano', 'Beltrano']

const scrapArr2 = arr.splice(4, 1, ...arr2); // splice = emendar => <removed_items>[]

const arr3 = ['Maçã', 'Abacate', 'Limão', 'Cereja'];
const copiedArr3 = arr3.copyWithin(0, 2); // .copyWithin(alvo, start, end) => new Array | .copyWithin(-1)

arr3.fill(3); // .fill(<value>, start, end) | preenche a array
