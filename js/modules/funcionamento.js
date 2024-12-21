export default function initFuncionamento() {
  const funcionaento = document.querySelector('[data-semana]');
  const weekDays = funcionaento.dataset.semana.split(',').map(Number);
  const weekHours = funcionaento.dataset.horario.split(',').map(Number);

  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();

  const daysOpening = weekDays.indexOf(currentDay) !== -1;
  const hoursOpening = (currentHour >= weekHours[0] && currentHour < weekHours[1]);

  if (daysOpening && hoursOpening) {
    funcionaento.classList.add('open');
  }
}
