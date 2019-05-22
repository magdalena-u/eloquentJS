class Group {
    constructor(array) {
        this.array = array;
    }

    static from(array) {
        return new Group(array);
    }

    add(value) {
        !this.array.includes(value) && this.array.push(value);
        return value;
    }

    delete(value) {
        this.array.includes(value) && this.array.splice(this.array.indexOf(value), 1);
        return value;
    }

    has(value) {
        return this.array.some(item => item === value);
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(cluster) {
        this.cluster = cluster;
        this.position = 0;
    }
    next() {
        if (this.position < this.cluster.array.length) {
            const result = { done: false, value: this.cluster.array[this.position] };
            this.position += 1;
            return result;
        } else {
            return { done: true };
        }
    }
}

Group.from(['a', 'b', 'c']);
for (let value of Group.from(['a', 'b', 'c'])) {
    console.log(value);
}
