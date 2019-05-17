/* function loop that provides a for loop statment
It takes a value, a test function, an update function, and a body
function.*/

const loop = (currentValue, test, update, body) => {
    if (test(currentValue)) {
        body(currentValue);
        const updateValue = update(currentValue);
        loop(updateValue, test, update, body);
    }
};

loop(3, n => n > 0, n => n - 1, console.log);
