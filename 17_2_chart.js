const results = [
    { name: 'Satisfied', count: 1043, color: 'lightblue' },
    { name: 'Neutral', count: 563, color: 'lightgreen' },
    { name: 'Unsatisfied', count: 510, color: 'pink' },
    { name: 'No comment', count: 175, color: 'silver' },
];

const ctx = document.querySelector('canvas').getContext('2d');
const total = results.reduce((sum, { count }) => sum + count, 0);
let currentAngle = -0.5 * Math.PI;
const centerX = 300;
const centerY = 150;

// Add code to draw the slice labels in this loop.
for (let result of results) {
    const sliceAngle = (result.count / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    const middleAngle = currentAngle + 0.5 * sliceAngle;
    const textX = Math.cos(middleAngle) * 120 + centerX;
    const textY = Math.sin(middleAngle) * 120 + centerY;
    if (middleAngle < 0) {
        ctx.textAlign = 'left';
    } else {
        ctx.textAlign = 'right';
    }
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = result.color;
    ctx.fill();
    ctx.font = '16px Georgia';
    ctx.fillStyle = 'black';
    ctx.fillText(result.name, textX, textY);
}
