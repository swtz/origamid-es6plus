const nome = 'Pizza';
const rua = new String('Rio de Janeiro');
const idade = new String(25);

nome.includes('a', nome.length - 1); // true | 2nd arg set the initial index to search | CS

const phoneNumber = '48996642905';
const phoneNumberLastFourDigits = phoneNumber.slice(-4); // Corta a string de acordo com os valores de start e end

console.log(phoneNumberLastFourDigits); // 2905
'string'.substring(); // funciona igual o .slice, porém não suporta valores negativos

const email = "luderleo#email.com"
console.log(email.indexOf("@"));

if (email.indexOf("@") === -1) {
    console.log('email inválido'); // .indexOf find first value | .lastIndexOf find last value
}

const registro = "45";
const registroFormatado = registro.padStart(5, '0'); // 00045

String.prototype.replace();

const tagMeta = document.querySelectorAll('meta');
let strMeta = '';

tagMeta.forEach((item) => {
    strMeta += item.outerHTML + ' '
});

console.log(strMeta);
console.log(strMeta.split('meta'));
console.log(strMeta.split('meta').join('h1'));
