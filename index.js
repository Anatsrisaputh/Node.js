const fs = require('fs');

fs.writeFileSync('CoDeCaMp.txt', `Hello, World`);
fs.appendFileSync('CoDeCaMp.txt', `Hello, Codecamp`);
let content = fs.readFileSync('CoDeCaMp.txt', 'utf-8');
console.log(content)


