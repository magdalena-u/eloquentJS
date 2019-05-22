const range = (start, end) => [...Array(end - start).keys()].map(i => i + start);

const sum = range => range.reduce((a, b) => a + b, 0);
