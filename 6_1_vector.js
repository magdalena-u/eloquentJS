class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(item) {
        console.log(`Vec {x: ${item.x + this.x}, y: ${item.y + this.y}}`);
    }
    minus(item) {
        console.log(`Vec {x: ${this.x - item.x}, y: ${this.y - item.y}}`);
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}
