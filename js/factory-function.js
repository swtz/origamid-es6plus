function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this; // this -> é o objeto que está sendo retornado na função principal, ou seja,
    // se o método não estiver nesse retorno, seu contexto será o objeto global 'window'.
    // Logo, 'return this;' retorna o objeto final. É útil para encadear instruções.
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  }
}

// Exemplo de uso:
const btns = $$('button').hide().show();

function handleClick() {
  btns.addClass('active');
}

btns.on('click', handleClick);
