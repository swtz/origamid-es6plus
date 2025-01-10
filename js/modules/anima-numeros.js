export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    if (numeros.length > 0) {
      numeros.forEach((numero) => {
        const total = +numero.innerHTML;
        const increment = Math.floor(total / 100);
        let start = 0;
        const timer = setInterval(() => {
          start += increment;
          numero.innerHTML = start;
          if (start > total) {
            numero.innerHTML = total;
            clearInterval(timer);
          }
        }, 25 * Math.random());
      });
    }
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector('.numeros');

  observer.observe(observeTarget, { attributes: true });
}
