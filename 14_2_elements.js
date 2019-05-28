function byTagName(node, tagName) {
    const elements = node.querySelectorAll(tagName);
    return [...elements].map(el => el.nodeName.toLowerCase());
}

console.log(byTagName(document.body, 'h1').length);
// → 1
console.log(byTagName(document.body, 'span').length);
// // → 3
let paragraph = document.querySelector('p');
console.log(byTagName(paragraph, 'span').length);
// // → 2
