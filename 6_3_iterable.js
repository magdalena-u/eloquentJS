class Group {
    constructor(array) {
        this.array = array;
    }

    static from(array) {
        let group = new Group(array);
        return group;
    }

    add(value) {
        this.array.includes(value) || this.array.push(value);
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
        (this.cluster = cluster), (this.position = 0);
    }
    next() {
        if (this.position < this.cluster.array.length) {
            let result = { done: false, value: this.cluster.array[this.position] };
            this.position++;
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
