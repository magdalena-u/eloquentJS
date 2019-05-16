const countBs = string => countChar(string, 'B');

const countChar = (string, char) => {
    let count = 0;
    [...string].forEach(item => (item === char ? count++ : null));
    return count;
};
