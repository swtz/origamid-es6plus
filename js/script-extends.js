class Veiculo {
  constructor(nome, rodas) {
    this.rodas = rodas;
    this.nome = nome;
  }
  acelerar() {
    console.log(`${this.nome} acelerou...`);
  }
}

class Moto extends Veiculo {
  constructor(nome, rodas, capacete) {
    super(nome, rodas);
    this.capacete = capacete;
  }
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas');
  }
  acelerar() {
    super.acelerar();
    console.log('Método sobrescrito!');
  }
}
const honda = new Moto('Honda', 2, true);
