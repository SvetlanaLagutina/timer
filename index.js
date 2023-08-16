const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (endtime) => {
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      let hh, mm, ss;
      
      endtime = endtime - 1;

      hh = Math.floor(endtime / 60 / 60),
      mm = Math.floor((endtime / 60) % 60),
      ss = Math.floor(endtime % 60);
              
      const t = {
          'total': endtime,
          'hours': hh,
          'minutes': mm,
          'seconds': ss
      };

      timerEl.innerHTML = `${getZero(t.hours)} : ${getZero(t.minutes)} : ${getZero(t.seconds)}`;

      if (t.total <= 0) {
          clearInterval(timeInterval);
      }
    }   

    function getZero(num) {
      if (num >= 0 && num < 10) {
          return `0${num}`;
      } else {
          return num;
      }
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('keyup', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});