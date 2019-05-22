let text = "'I'm the cook,' he said, 'it's my job.'";
const reg = /(\W'|'\W|^')/g;

console.log(text.replace(reg, '"'));
