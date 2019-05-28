const baloon = document.querySelector('.baloon');
const measure = document.querySelector('.measure');
const btnStart = document.querySelector('.start');

let size = 50;
let level = -200;

const playGame = () => {
    clearScore();
    window.addEventListener('keydown', pump);
};

const pump = event => {
    if (event.keyCode === 38) {
        maximize();
    }

    if (event.keyCode === 40) {
        minimize();
    }

    if (baloon.style.fontSize === 250 + 'px') {
        boom();
    }
};

const maximize = () => {
    size += 10;
    level += 10;
    baloon.style.fontSize = size + 'px';
    measure.style.left = level + 'px';
};

const minimize = () => {
    size -= 10;
    level -= 10;
    baloon.style.fontSize = size + 'px';
    measure.style.left = level + 'px';
};

const boom = () => {
    baloon.innerHTML = '💥';
    window.removeEventListener('keydown', pump);
};

const clearScore = () => {
    size = 50;
    level = -200;
    baloon.innerHTML = '🎈';
    measure.style.left = level + 'px';
    baloon.style.fontSize = size + 'px';
    btnStart.innerText = 'Try again';
};

btnStart.addEventListener('click', playGame);
