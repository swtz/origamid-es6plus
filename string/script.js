// #1
const transacoes = [
    {
        descricao: 'Taxa do pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de cliente',
        valor: 'R$ 49',
    },
];

let totalTaxa = 0;
let totalRecebimento = 0;

transacoes.forEach((item) => {
    const valor = item.valor;
    const valorLimpo = +valor.replace('R$ ', '');

    if (item.descricao.toLowerCase().trim().startsWith('tax')) {
        totalTaxa += valorLimpo;
    } else if (item.descricao.toLowerCase().trim().startsWith('receb')) {
        totalRecebimento += valorLimpo;
    }
});

console.log(totalTaxa);
console.log(totalRecebimento);

// 2#

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transacoesArray = transportes.split(';');
console.log(transacoesArray);

// #3

const html = `
    <ul>
        <li><span>Sobre</span></li>
        <li><span>Produtos</span></li>
        <li><span>Contatos</span></li>
    </ul>
`

console.log(html.split('span').join('a'));

// #4
const frase = 'Melhor do ano!';
console.log('#4 =>', frase.slice(-1));

// #5
const transacoes2 = ['Taxa do Banco', '     TAXA DO PÃO', '    taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let count = 0;
transacoes2.forEach((item) => {
    if (item.toLocaleLowerCase().trim().includes('taxa')) count++;
});

console.log(count); // 3
