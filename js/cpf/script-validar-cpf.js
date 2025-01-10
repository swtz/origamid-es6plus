import ValidarCPF from './validar-cpf.js';

const cpf = document.querySelector('#cpf');
const validarCPF = new ValidarCPF(cpf);

console.log(validarCPF.iniciar());
