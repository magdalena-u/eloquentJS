//Code from the Eloquent JavaScript

const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error('Locked!');
        return this._content;
    },
};

//Solution

function withBoxUnlocked(value) {
    if (!box.locked) {
        value();
    }
    box.unlock();
    try {
        value();
    } catch (er) {
        throw er;
    } finally {
        box.lock();
    }
}

//Test

withBoxUnlocked(function() {
    box.content.push('gold piece');
});

try {
    withBoxUnlocked(function() {
        throw new Error('Pirates on the horizon! Abort!');
    });
} catch (e) {
    console.log('Error raised:', e);
}
console.log(box.locked);
// → true
