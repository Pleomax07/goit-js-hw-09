const statButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

statButton.addEventListener('click', onStartBtnClick);
stopButton.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopButton.disabled = true;

function onStartBtnClick() {
  let timerId = null;
  timerId = setInterval(() => {
    body.style.cssText = `background-color: ${getRandomHexColor()};`;
  }, 1000);
  statButton.disabled = true;
  stopButton.disabled = false;
}
function onStopBtnClick() {
  clearInterval(timerId);
  statButton.disabled = false;
  stopButton.disabled = true;
}
