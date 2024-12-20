// #1
const html = document.querySelector('html');

// setInterval(() => {
//   if (html.classList.contains('red')) {
//     html.classList.remove('red');
//     html.classList.add('blue');
//   } else {
//     html.classList.remove('blue');
//     html.classList.add('red');
//   }
// }, 2000)

// #2
const btnInit = document.querySelector('[data-stopwatch="init"]');
const btnPause = document.querySelector('[data-stopwatch="pause"]');
const timerText = document.querySelector('p');

btnInit.addEventListener('click', handleClick);

let timer = 0;

function handleClickMyself() {
  const stopwatch = setInterval(() => {
    timerText.innerText = timer++;
  }, 300)
  btnInit.removeEventListener('click', handleClick);

  function pauseTimer() {
    clearInterval(stopwatch);
    this.removeEventListener('click', pauseTimer);
  }
  btnPause.addEventListener('click', pauseTimer);

  function cleanTimer() {
    clearInterval(stopwatch);
    timer = 0;
    timerText.innerText = timer;
    btnPause.removeEventListener('dblclick', cleanTimer);
  }
  btnPause.addEventListener('dblclick', cleanTimer)
}

// # Otimizado pelo GitHub Copilot
function startTimer() {
  return setInterval(() => {
    timerText.innerText = timer++;
  }, 300);
}

function pauseTimer(stopwatch) {
  return function () {
    clearInterval(stopwatch);
    this.removeEventListener('click', pauseTimer(stopwatch));
  }
}

function cleanTimer(stopwatch) {
  return function () {
    clearInterval(stopwatch);
    timer = 0;
    timerText.innerText = timer;
    btnPause.removeEventListener('dblclick', cleanTimer(stopwatch));
  }
}

function handleClick() {
  const stopwatch = startTimer();
  btnInit.removeEventListener('click', handleClick);
  btnPause.addEventListener('click', pauseTimer(stopwatch));
  btnPause.addEventListener('dblclick', cleanTimer(stopwatch));
}
