const carro = {
    marca: 'Saveiro',
    ano: 2018
}

const moto = Object.create(carro);

moto.marca = 'Kawasaki';
moto.ano = 2022;

console.log(moto);
console.log(carro.isPrototypeOf(moto)); // true

Object.prototype.toString.call([]); // [object Array]
