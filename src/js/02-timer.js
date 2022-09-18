import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const timer = document.querySelector('.timer');
const body = document.querySelector('body');

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

// Добавь минимальное оформление элементов интерфейса.
body.style.cssText = `
background-color: lightgrey;`;


startBtn.disabled = true;

// Опции для flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectTime = selectedDates[0];
    // Если пользователь выбрал дату в прошлом, покажи
    // window.alert() с текстом "Please choose a date in the future"

    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
        const timerId = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = selectTime - currentTime;
          
          if (deltaTime <= 0) {
            clearInterval(timerId);
          } else {
            startBtn.disabled = true;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            console.log(`${days} ${hours} ${minutes} ${seconds}`);
            daysEl.textContent = days;
            hoursEl.textContent = hours;
            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;
          }
        }, 1000);
      });
    }
  },
};

flatpickr(input, options);

// функция форматирует дату в формат хх:хх:хх:хх
function pad(value) {
  return String(value).padStart(2, '0');
}

// Функция для конвертации милисекунд в дни, часы, минуты

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
