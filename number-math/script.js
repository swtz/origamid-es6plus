// Access Methods

const arr = [].concat(['item1', 'item2']); // concatena arrays

const animals = ['Jaguatirica', 'Leopardo'];

['Leão', 'Vaca', ...animals].includes(...animals); // => boolean | ...string[]

const linguagens = ['html', 'css', 'js', 'php', 'python'];
const joinedLang = linguagens.join(' & ') // => string

const arr2 = linguagens.slice(1, 3); // ['css', 'js'] | arr.slice() => new Array (deep copy)
