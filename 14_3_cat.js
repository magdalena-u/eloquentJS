const hat = document.getElementById('hat');
const div = document.querySelector('div');
let angle = Math.PI / 2;
const multiplierA = 20;
const multiplierB = 200;
const transformTopDiv = 50;
const transformLeftDiv = 250;
const transformTopHat = -30;
const transformLeftHat = 80;

function animate(time, lastTime) {
    if (lastTime) {
        angle += (time - lastTime) * 0.001;
    }

    div.style.top = Math.sin(angle) * multiplierA + transformTopDiv + 'px';
    div.style.left = Math.cos(angle) * multiplierB + transformLeftDiv + 'px';

    hat.style.top = Math.cos(angle) * multiplierA - transformTopHat + 'px';
    hat.style.left = Math.sin(angle) * multiplierA + transformLeftHat + 'px';

    requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);
