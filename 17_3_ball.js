//code from Eloquent JavaScript
const canvas = document.querySelector('canvas').getContext('2d');

let lastTime = null;
function frame(time) {
    if (lastTime != null) {
        updateAnimation(Math.min(100, time - lastTime) / 1000);
    }
    lastTime = time;
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// My solution

let x = 100;
let y = 100;
let speedX = 50;
let speedY = 50;
const radius = 20;

function updateAnimation(step) {
    canvas.clearRect(0, 0, 600, 500);

    x += step * speedX;
    y += step * speedY;

    if (x >= 600 - radius || x <= 0 + radius) {
        speedX = -speedX;
    }

    if (y >= 500 - radius || y <= 0 + radius) {
        speedY = -speedY;
    }

    canvas.fillStyle = 'red';
    canvas.beginPath();
    canvas.arc(x, y, radius, 0, Math.PI * 2, true);
    canvas.fill();
}
