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
  this.classList.toggle('ativo');
}
