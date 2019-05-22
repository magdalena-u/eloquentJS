const range = n => new Array(n).fill().map((_, i) => i)

const run = n => range(n).forEach(item => {
    if (item % 3 === 0 && item % 5 === 0) {
        console.log("FizzBuzz")
    } else if (item % 5 === 0) {
        console.log("Fizz")
    } else if (item % 3 === 0) {
        console.log("Buzz")
    } else console.log(item)
})
