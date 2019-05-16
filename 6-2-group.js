class Group {
    constructor(arr) {
        this.cluster = arr;
    }
    add = value => this.cluster.includes(value) || this.cluster.push(value);
    delete = value =>
        this.cluster.includes(value) && this.cluster.splice(this.cluster.indexOf(value), 1);
    has = value => this.cluster.some(item => item === value);

    static from(arr) {
        return new Group(arr);
    }
}
