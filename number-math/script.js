// #1
function checkDataType(data) {
    return `Data type is: ${Object.prototype.toString.call(data)}`;
};

// console.log(checkDataType({ name: 'Leonardo', age: 25 }));
// console.log(checkDataType({ 0: 'Leonardo', 1: 25, 2: 'Masculino', length: 3 }));
// console.log(checkDataType(['Leonardo', 25, 'Masculino']));
// console.log(checkDataType(document.querySelectorAll('section')));


// #2
const formGeometric = {};

const square = Object.defineProperties(formGeometric, {
    sides: {
        value: 4
    }
}); // modifica o objeto 'formGeometric' também

console.log(Object.getOwnPropertyDescriptors(square));


// #3
const config = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(config);


// #4
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
