const arrayToList = ([value, ...values]) =>
    ({
        value,
        rest: values.length === 0 ? void 0 : arrayToList(values)
    })

const listToArray = ({
    value,
    rest
}, acc = []) => {
    const cumulated = [...acc, value]
    return rest.length === 0 ? cumulated : listToArray(rest, cumulated)
}
