export default class ValidarCPF {
  constructor(element) {
    this.element = element;
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, '');
  }

  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }

  validar(cpf) {
    const matchCPF = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return (matchCPF && matchCPF[0] === cpf);
  }

  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.add('valido');
      cpfElement.classList.remove('erro');
      cpfElement.nextElementSibling.classList.remove('active');
    } else {
      cpfElement.classList.add('erro');
      cpfElement.classList.remove('valido');
      cpfElement.nextElementSibling.classList.add('active');
    }
  }

  adicionarEvento() { // () => { this = ValidarCPF } | function() { this = element }
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element);
    });
  }

  mensagemDeErro() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'CPF Inválido';
    this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling);
  }

  iniciar() {
    this.adicionarEvento();
    this.mensagemDeErro();
    return this;
  }
}
