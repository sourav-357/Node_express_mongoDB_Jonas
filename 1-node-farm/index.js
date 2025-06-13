const fs = require('fs');

// Reading content from the file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

// Definign what to write in the file
const textOut = `This is what we know about avacado: ${textIn}\nCreated on ${Date.now()}`;
console.log(textOut);

// Writting a file 
fs.writeFileSync('./txt/output.txt', textOut);
console.log(`File written!`);

