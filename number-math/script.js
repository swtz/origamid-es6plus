// Object.getOwnPropertyDescriptors(Array);
// Object.getOwnPropertyDescriptors(Array.prototype);
// Object.getOwnPropertyDescriptor(Array.prototype, 'forEach');

Object.keys(Array); // [] | Array não possui propriedades enumeráveis

const moto = { capacete: true };

Object.defineProperties(moto, {
    rodas: {
        enumerable: true,
        get() {
            return this._rodas;
        },
        set(value) {
            this._rodas = value;
        }
    }
});

Object.getPrototypeOf(['item 1', 'item 2']); // same return of Array.prototype

obj1 = {};
obj2 = {};

console.log(Object.is(obj1, obj2)); // false
