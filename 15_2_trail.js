const mouseMove = event => {
    const y = event.clientY;
    const x = event.clientX;

    draw(x, y);
};

const draw = (x, y) => {
    const star = new Element(x, y);

    star.init();
};

class Element {
    character = '⭐';
    nodeElement;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    init() {
        const random = Math.floor(Math.random() * 25);

        this.nodeElement = document.createElement('div');
        this.nodeElement.innerHTML = this.character;
        this.nodeElement.style.left = `${this.x + random}px`;
        this.nodeElement.style.top = `${this.y + random}px`;

        document.body.appendChild(this.nodeElement);

        setTimeout(() => {
            this.nodeElement.remove();
        }, 500);
    }
}

document.addEventListener('mousemove', mouseMove);
