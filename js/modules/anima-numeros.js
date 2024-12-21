export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  if (numeros.length > 0) {
    function animaNumeros() {
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

    function handleMutation(mutation) {
      if (mutation[0].target.classList.contains('ativo')) {
        observer.disconnect();
        animaNumeros();
      }
    }

    const observeTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation);

    observer.observe(observeTarget, { attributes: true });
  }
}
