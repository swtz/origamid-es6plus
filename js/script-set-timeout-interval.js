const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick() {
  setTimeout(() => {
    console.log(this);
    this.classList.add('ativo');
  }, 1000);
}