const countBs = (string) => {
    return countChar(string, "B")
}

let countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++
        }
    }
    return count
}