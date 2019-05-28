const element = '⭐';
let x = 0;
let y = 0;
let array = [];

const mouseMove = event => {
    y = event.clientY;
    x = event.clientX;
    draw(x, y);
};

const draw = (x, y) => {
    const star = new Element(x, y);
    star.init();
    star.update();
    window.setInterval(remove, 500);
    removeDiv();
};

const removeDiv = () => {
    const divs = document.querySelectorAll('div');
    if (divs.length >= 20) {
        divs.forEach(div => div.remove());
    }
};
const remove = () => {
    array.forEach(item => {
        const index = array.indexOf(item);
        array.splice(index, 1);
    });
};

const loop = () => {
    requestAnimationFrame(loop);
    draw();
};

class Element {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.character = element;
    }

    init() {
        const div = document.createElement('div');
        div.innerHTML = element;
        document.body.appendChild(div);
        array.push(div);
    }

    update() {
        array.forEach(item => {
            let random = Math.floor(Math.random() * 25);
            item.style.left = x + random + 'px';
            item.style.top = y + random + 'px';
            item.style.position = 'absolute';
        });
    }
}

document.addEventListener('mousemove', mouseMove);
