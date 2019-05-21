//Code from the Eloquent JavaScript

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure('Klunk');
    }
}

//Solution

function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (er) {
            if (!(er instanceof MultiplicatorUnitFailure)) throw er;
        }
    }
}

//Test

console.log(reliableMultiply(5, 8));
// → 64
