const num = 22.22;
const fixedNum = num.toFixed(); // retorna uma string | arg0 -> número de casas decimais

const currencyNum = num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });

// Math é um objeto nativo

console.log(Math.ceil(num)); // ceil = teto | força o resultado 'para cima' | -> 23 (Int)
console.log(Math.floor(22.9)); // floor = chão | força o resultado 'para baixo' | -> 22 (Int)
console.log(Math.round(22.5)); // arredonda com base na matemática | -> 23 (Int)

Math.max(4, 23, 45, 66, 12, 3, 45, 88); // 88 | existe tbm o Math.min()

Math.random(); // 0.XXX

// Para gerar um número aleatório entre 2 algarismos

const min = 30;
const max = 70;

console.log(`Número aleatório entre ${max} & ${min}: ${Math.floor(Math.random() * (max - min + 1) + min)}`);
