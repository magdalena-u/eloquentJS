class Group {
    constructor(array) {
        this.array = array;
    }

    static from(array) {
        return new Group(array);
    }

    add(value) {
        if (!this.array.includes(value) && this.array.push(value)) {
            return true;
        }
        return console.log(`${value} is incorrect value`);
    }

    delete(value) {
        if (this.array.includes(value) && this.array.splice(this.array.indexOf(value), 1)) {
            return true;
        }
        return console.log(`${value} is incorrect value`);
    }

    has(value) {
        return this.array.some(item => item === value);
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    position = 0;
    constructor(cluster) {
        this.cluster = cluster;
    }

    next() {
        if (this.position < this.cluster.array.length) {
            const result = { done: false, value: this.cluster.array[this.position] };
            this.position += 1;
            return result;
        }
        return { done: true };
    }
}

Group.from(['a', 'b', 'c']);
for (let value of Group.from(['a', 'b', 'c'])) {
    console.log(value);
}
