const results = [
    { name: 'Satisfied', count: 1043, color: 'lightblue' },
    { name: 'Neutral', count: 563, color: 'lightgreen' },
    { name: 'Unsatisfied', count: 510, color: 'pink' },
    { name: 'No comment', count: 175, color: 'silver' },
];

const canvas = document.querySelector('canvas').getContext('2d');
const total = results.reduce((sum, { count }) => sum + count, 0);
let currentAngle = -0.5 * Math.PI;
const centerX = 300;
const centerY = 150;

// Add code to draw the slice labels in this loop.
for (let result of results) {
    const sliceAngle = (result.count / total) * 2 * Math.PI;

    canvas.beginPath();
    canvas.arc(centerX, centerY, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;

    const middleAngle = currentAngle + 0.5 * sliceAngle;
    const textX = Math.cos(middleAngle) * 120 + centerX;
    const textY = Math.sin(middleAngle) * 120 + centerY;

    middleAngle < 0 ? (canvas.textAlign = 'left') : (canvas.textAlign = 'right');

    canvas.lineTo(centerX, centerY);
    canvas.fillStyle = result.color;
    canvas.fill();
    canvas.font = '16px Georgia';
    canvas.fillStyle = 'black';
    canvas.fillText(result.name, textX, textY);
}
