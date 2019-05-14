const isEven = (number) => {
    if (number === 1) {
        return false
    } else if (number === 0) {
        return true
    } else return isEven(number - 2)
}