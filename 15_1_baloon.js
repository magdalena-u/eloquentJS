const baloon = document.querySelector('.baloon');
const measure = document.querySelector('.measure');
const btnStart = document.querySelector('.start');

let size = 50;
let level = -200;

const upArrowKeyCode = 38;
const downArrowKeyCode = 40;

const playGame = () => {
    clearScore();
    window.addEventListener('keydown', pump);
};

const pump = event => {
    if (event.keyCode === upArrowKeyCode) {
        maximize();
    }

    if (event.keyCode === downArrowKeyCode) {
        minimize();
    }

    if (baloon.style.fontSize === '250px') {
        boom();
    }
};

const maximize = () => {
    size += 10;
    level += 10;
    baloon.style.fontSize = `${size}px`;
    measure.style.left = `${level}px`;
};

const minimize = () => {
    size -= 10;
    level -= 10;
    baloon.style.fontSize = `${size}px`;
    measure.style.left = `${level}px`;
};

const boom = () => {
    baloon.innerHTML = '💥';
    window.removeEventListener('keydown', pump);
};

const clearScore = () => {
    size = 50;
    level = -200;
    baloon.innerHTML = '🎈';
    baloon.style.fontSize = `${size}px`;
    measure.style.left = `${level}px`;
    btnStart.innerText = 'Try again';
};

btnStart.addEventListener('click', playGame);
