const mouseMove = event => {
    y = event.clientY;
    x = event.clientX;
    draw(x, y);
};

const draw = (x, y) => {
    const star = new Element(x, y);
    star.init();
    window.setTimeout(star.trash, 500);
};

class Element {
    character = '⭐';
    nodeElement = document.querySelector('div');
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    init() {
        const random = Math.floor(Math.random() * 25);
        const div = document.createElement('div');
        div.innerHTML = this.character;
        div.style.left = x + random + 'px';
        div.style.top = y + random + 'px';
        div.style.position = 'absolute';
        document.body.appendChild(div);
    }

    trash() {
        const div = document.querySelector('div');
        div.remove();
    }
}

document.addEventListener('mousemove', mouseMove);
