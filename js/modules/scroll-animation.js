export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-scroll]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if (isSectionVisible) section.classList.add('ativo');
      // else
      //   section.classList.remove('ativo'); // the content keeps appearing
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
