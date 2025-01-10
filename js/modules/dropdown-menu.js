import clickOutside from './click-outside.js';

export default function initDropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const events = ['touchstart', 'click'];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    clickOutside(this, events, () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenus.forEach((item) => {
    events.forEach((ev) => {
      item.addEventListener(ev, handleClick);
    });
  });
}
