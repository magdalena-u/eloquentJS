const arrayToList = (arr) => {
    let list;
    for (let i = 0; i < arr.length; i++) {
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list
}

const listToArray = (list) => {
    let arr = []
    for (let num = list; num; num = num.rest) {
        arr.push(num.value)
    }
    return arr
}