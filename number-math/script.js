const carro = {
    rodas: 4,
    init(marca) {
        this.marca = marca
        return this
    },
    acelerar() {
        return `O veículo da marca ${this.marca} acelerou com as ${this.rodas} rodas.`
    },
    buzinar() {
        return `${this.marca} buzinou`
    }
}

const mitsubishi = Object.create(carro).init('Mitsubishi');

const kawasaki = {
    tipo: 'moto',
    marca: 'kawasaki',
    rodas: 2,
    capacete: true
}

Object.assign(kawasaki, { acelerar() { return `O veículo da marca ${this.marca} acelerou com as ${this.rodas} rodas.` } });

const enfermeiro = { nome: null };

Object.defineProperties(enfermeiro, {
    coren: {
        // value: 'SC-XXXX-XX',
        // configurable: false, // avoid to delete | default: false
        // writable: false,  // avoid to change value | default: false
        // enumerable: false, // default: false
        get() {
            console.log('passou pelo get');
            return this._coren;
        },
        set(value) {
            console.log('passou pelo set');
            this._coren = value.toLowerCase();
        }
    }
});
