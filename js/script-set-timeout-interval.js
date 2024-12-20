// #1
function switchColor() {
  const body = document.querySelector('body');
  body.classList.toggle('ativo');
}

// setInterval(switchColor, 2000);

// #2
const btnInit = document.querySelector('[data-stopwatch="init"]');
const btnPause = document.querySelector('[data-stopwatch="pause"]');
const timerText = document.querySelector('p');

btnInit.addEventListener('click', initTimer);
btnPause.addEventListener('click', pauseTimer);
btnPause.addEventListener('dblclick', clearTimer);

let time = 0;
let stopwatch;

function initTimer() {
  stopwatch = setInterval(() => {
    timerText.innerText = time++;
  }, 300);
  btnInit.setAttribute('disabled', '');
}

function pauseTimer() {
  clearInterval(stopwatch);
  btnInit.removeAttribute('disabled');
}

function clearTimer() {
  timerText.innerText = 0;
  time = 0;
}


// # Otimizado pelo GitHub Copilot
// function startTimer() {
//   return setInterval(() => {
//     timerText.innerText = timer++;
//   }, 300);
// }

// function pauseTimer(stopwatch) {
//   return function () {
//     clearInterval(stopwatch);
//     this.removeEventListener('click', pauseTimer(stopwatch));
//   }
// }

// function cleanTimer(stopwatch) {
//   return function () {
//     clearInterval(stopwatch);
//     timer = 0;
//     timerText.innerText = timer;
//     btnPause.removeEventListener('dblclick', cleanTimer(stopwatch));
//   }
// }

// function handleClick() {
//   const stopwatch = startTimer();
//   btnInit.removeEventListener('click', handleClick);
//   btnPause.addEventListener('click', pauseTimer(stopwatch));
//   btnPause.addEventListener('dblclick', cleanTimer(stopwatch));
// }
