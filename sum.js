const range = (start = 0, end) => {
    return [...Array(end - start).keys()].map(i => i + start);
}

const sum = (range) => {
    return range.reduce((a, b) => a + b, 0)
}