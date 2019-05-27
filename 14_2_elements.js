function byTagName(node, tagName) {
    const array = [];
    const elements = node.querySelectorAll(tagName);
    elements.forEach(element => {
        element.nodeName.toLowerCase();
        array.push(element);
    });
    return array;
}

console.log(byTagName(document.body, 'h1').length);
// → 1
console.log(byTagName(document.body, 'span').length);
// → 3
let para = document.querySelector('p');
console.log(byTagName(para, 'span').length);
// → 2
