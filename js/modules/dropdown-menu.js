import clickOutside from './click-outside.js';

export default function initDropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const events = ['touchstart', 'click'];

  dropdownMenus.forEach((item) => {
    events.forEach(ev => {
      item.addEventListener(ev, handleClick)
    })
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    clickOutside(this, events, () => {
      this.classList.remove('ativo');
    });
  }
}
