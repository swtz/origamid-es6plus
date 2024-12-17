// muda o nome das classes que contém 'js' por 'data'
// remove as classes que contém 'js'
// adiciona o attr sem valor
// assim, o elemento possui attr's do tipo dataset

const jsClasses = document.querySelectorAll('[class*=js-]');

jsClasses.forEach((el) => {
    const jsClass = el.classList[el.classList.length - 1];
    const newDatasetAttr = jsClass.replace('js', 'data');

    el.classList.remove(jsClass);
    el.setAttribute(newDatasetAttr, '');
});