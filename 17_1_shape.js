const canvas = document.querySelector('canvas').getContext('2d');

// A trapezoid
function generateTrapezoid() {
    canvas.strokeStyle = 'black';
    canvas.beginPath();
    canvas.moveTo(50, 50);
    canvas.lineTo(80, 50);
    canvas.lineTo(100, 80);
    canvas.lineTo(30, 80);
    canvas.closePath();
    canvas.stroke();
}

// generateTrapezoid();

//A red diamond
function generateDiamond() {
    canvas.fillStyle = 'red';
    canvas.rotate(Math.PI / 4);
    canvas.fillRect(50, -50, 100, 100);
}

// generateDiamond();

//A zigzagging line
function generateZigZag() {
    canvas.strokeStyle = 'black';
    canvas.moveTo(50, 50);
    let counter = 50;

    for (let i = 0; i <= 12; i++) {
        counter += 25;

        i % 2 === 0 ? canvas.lineTo(100, counter) : canvas.lineTo(50, counter);

        canvas.stroke();
    }
}
generateZigZag();

//Spiral

function generateSpiral() {
    const x = 250;
    const y = 250;

    canvas.strokeStyle = 'black';
    canvas.beginPath();
    canvas.moveTo(x, y);

    for (let i = 0; i < 200; i++) {
        const angle = (i * Math.PI) / 20;
        const radius = 30 + i;
        const lineRadiusX = x + Math.cos(angle) * radius;
        const lineRadiusY = y + Math.sin(angle) * radius;

        canvas.lineTo(lineRadiusX, lineRadiusY);
    }

    canvas.stroke();
}

// generateSpiral();

//a yellow star

function generateStar() {
    const x = 100;
    const y = 100;

    canvas.beginPath();
    canvas.moveTo(x, y);

    for (let i = 0; i <= 8; i++) {
        const angle = (i * Math.PI) / 4;
        canvas.quadraticCurveTo(x, y, x + Math.cos(angle) * 40, y + Math.sin(angle) * 40);
    }
    canvas.fillStyle = 'orange';
    canvas.fill();
}

// generateStar();
