// #1
const animalsDescriptionSections = document.querySelectorAll('.animais-descricao section');

animalsDescriptionSections.forEach((section) => {
    section.dataset.anime = 'show-down';
    section.dataset.anime += ' show-right';
});


// #2
// animations.js | initTabNav

// #3
// style.css | @keyframes show-down/show-right

// #4
const jsClasses = document.querySelectorAll('[class*=js-]');

jsClasses.forEach((el) => {
    const jsClass = el.classList[el.classList.length - 1];
    const newDatasetAttr = jsClass.replace('js', 'data');

    el.classList.remove(jsClass);
    el.setAttribute(newDatasetAttr, '');
});
