// Methods

const frase = 'JavaScript, TypeScript, CoffeeScript, Java';

const regexp = /\w+/g;

let regexResult;
while ((regexResult = regexp.exec(frase)) !== null) {
  console.log(regexResult);
}