const ctx = document.querySelector('canvas').getContext('2d');
// A trapezoid

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(80, 50);
ctx.lineTo(100, 80);
ctx.lineTo(30, 80);
ctx.closePath();
ctx.stroke();

//A red diamond
ctx.fillStyle = 'red';
ctx.rotate(Math.PI / 4);
ctx.fillRect(50, -50, 100, 100);

//A zigzagging line

ctx.strokeStyle = 'black';
ctx.moveTo(50, 50);
let counter = 50;

for (let i = 0; i <= 12; i++) {
    counter += 25;
    if (i % 2 === 0) {
        ctx.lineTo(100, counter);
    } else {
        ctx.lineTo(50, counter);
    }
    ctx.stroke();
}

//Spiral

const x = 250;
const y = 250;

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(x, y);

for (let i = 0; i < 200; i++) {
    const angle = (i * Math.PI) / 20;
    let radius = 30 + i;
    ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
}

ctx.stroke();

//a yellow star

const x = 100;
const y = 100;

ctx.beginPath();
ctx.moveTo(x, y);

for (let i = 0; i <= 8; i++) {
    const angle = (i * Math.PI) / 4;
    ctx.quadraticCurveTo(x, y, x + Math.cos(angle) * 40, y + Math.sin(angle) * 40);
}
ctx.fillStyle = 'orange';
ctx.fill();
