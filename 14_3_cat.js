let cat = document.querySelector('img');
let hat = document.getElementById('hat');
let div = document.querySelector('div');
let angle = Math.PI / 2;

function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    div.style.top = Math.sin(angle) * 20 + 50 + 'px';
    div.style.left = Math.cos(angle) * 200 + 250 + 'px';

    hat.style.top = Math.cos(angle) * 10 - 30 + 'px';
    hat.style.left = Math.sin(angle) * 20 + 80 + 'px';

    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);
