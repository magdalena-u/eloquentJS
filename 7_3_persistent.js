class PGroup {
    constructor(array) {
        this.array = array;
    }

    add(value) {
        if (this.array.includes(value)) return;
        return new PGroup(this.array.concat(value));
    }

    delete(value) {
        if (!this.array.includes(value)) return;
        return new PGroup(this.array.splice(this.array.indexOf(value) - 1, 1));
    }

    has(value) {
        return this.array.includes(value);
    }
}
