export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tabmenu] li');
  const tabContent = document.querySelectorAll('[data-tabcontent] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo', tabContent[index].dataset.anime);
    });

    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo', tabContent[0].dataset.anime);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
