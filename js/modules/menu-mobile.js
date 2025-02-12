import clickOutside from './click-outside.js';

export default function initMenuMobile() {
  const btnMenu = document.querySelector('[data-menu="button"]');
  const listMenu = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart'];

  function openMenu() {
    listMenu.classList.add('ativo');
    btnMenu.classList.add('ativo');
    clickOutside(listMenu, events, () => {
      listMenu.classList.remove('ativo');
      btnMenu.classList.remove('ativo');
    });
  }

  if (btnMenu) {
    events.forEach((userEvent) => btnMenu.addEventListener(userEvent, openMenu));
  }
}
