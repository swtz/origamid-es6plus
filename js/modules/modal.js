export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function handleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickOutside(event) {
    if (event.target === this) handleModal(event);
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', handleModal);
    botaoFechar.addEventListener('click', handleModal);
    containerModal.addEventListener('click', clickOutside);
  }
}
