let map = {
    one: true,
    two: true,
    hasOwnProperty: true
};
// Fix call
console.log(Object.prototype.hasOwnProperty.call(map, 'one'))
