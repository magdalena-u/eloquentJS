const deepEqual = (value1, value2) => {
    if (typeof (value1) === typeof (value2)) {
        if (typeof (value1 === "object")) {
            (JSON.stringify(Object.keys(value1)) === JSON.stringify((Object.keys(value2))) ? true : false)
        }
        return value1 === value2 ? true : false
    } else return false
}