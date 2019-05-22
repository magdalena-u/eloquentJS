const deepEqual = (a, b) => {
    if (a === b) return true;

    if (typeof a === 'object' && typeof b === 'object') {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
    }
    if (Object.keys(a).every(item => !Object.keys(b).includes(item))) {
        return false;
    }
    for (let key in a) {
        if (!(key in b)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
};
