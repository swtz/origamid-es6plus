export default function initDropdown() {

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((item) => {
  ['touchstart', 'click'].forEach(ev => {
    item.addEventListener(ev, handleClick)
  })
});

function handleClick(event) {
  event.preventDefault();
  this.classList.add('ativo');
  clickOutside(this, () => {
    this.classList.remove('ativo');
  });
}

function clickOutside(element, callbackFn) {
  const html = document.documentElement
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    html.addEventListener('click', handleOutsideClick);
    element.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      callbackFn();
      html.removeEventListener('click', handleOutsideClick);
    }
  }
}
