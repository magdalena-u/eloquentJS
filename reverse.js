const reverseArray = arr => {
    let newArr = []
    arr.map(i => newArr.unshift(i));
    return newArr
}
const reverseArrayInPlace = arr => {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = a
        return arr
    }
}
