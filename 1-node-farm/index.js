
// ************************** Using Module 1 in Node.js **************************//

// importing the fs module
const fs = require('fs');

// Reading data from another file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

