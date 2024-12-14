// #1
const $ = document.querySelectorAll.bind(document);
const allP = $('p');

const totalCharInP = Array.prototype.reduce.call(allP, (prev, current) => {
    const pTextLength = current.innerText.length;
    return prev + pTextLength;
}, 0);

console.log(totalCharInP); // 655

// #2
function createHtmlElement(tag, cls, content) {
    let el = document.createElement(tag);
    cls ? el.classList.add(cls) : null;
    content ? el.innerText = content : null;
    return el;
}

// const h1 = createHtmlElement('h1','ativo', 'Hello, world!');

// console.log(h1); // h1.ativo

// #3
const generateH1 = createHtmlElement.bind(null, 'h1', 'titulo');

const h1 = generateH1('Conteúdo gerado dinamicamente');
