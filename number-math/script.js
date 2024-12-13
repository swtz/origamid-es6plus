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

const nomeAulas = aulas.reduce((prev, current, index) => {
    prev[index] = current.nome
    return prev;
}, {});

console.log(nomeAulas);