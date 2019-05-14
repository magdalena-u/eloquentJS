const loop = (currentValue, test, update, body) => {
    if (test(currentValue)) {
        body(currentValue)
        const updateValue = update(currentValue)
        loop(updateValue, test, update, body)
    } else return
}