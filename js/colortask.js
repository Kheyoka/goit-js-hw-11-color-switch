const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('.body'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(arr, element) {
  const color = arr[randomIntegerFromInterval(0, arr.length - 1)];
  element.style.backgroundColor = color;
  return color;
}

const isActiv = {
  start: true,
  stop: false,
};

const handleClickStart = () => {
  if (isActiv.start) {
    isActiv.stop = setInterval(changeColor, 1000, colors, refs.body);
    isActiv.start = false;
  }
};

const handleClickStop = () => {
  if (isActiv.stop) {
    clearInterval(isActiv.stop);
    isActiv.stop = false;
    isActiv.start = true;
  }
};

refs.startBtn.addEventListener('click', handleClickStart);
refs.stopBtn.addEventListener('click', handleClickStop);
