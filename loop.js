const test = n => n > 0;
const update = n => n - 1;

// function loop that works as for loop statment, but use recursion instead
const loop = (currentValue, test, update, body) => {
    if (test(currentValue)) {
        body(currentValue);
        const updateValue = update(currentValue);
        loop(updateValue, test, update, body);
    }
};

loop(3, test, update, console.log);
