
// ************************** Using Module 1 in Node.js **************************//

/*
// importing the fs module
const fs = require('fs');

// Reading data from another file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

// Writing the data on another file by the help of fs module
const textOut = `This is what we know about avocadro: ${textIn}\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/final.txt', textOut);
console.log('File Written Success...!');
*/

// ************************** Synchronous method (Blocking) **************************//

/*
// importing the fs module
const fs = require('fs');

// Reading data from another file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

// Writing the data on another file by the help of fs module
const textOut = `This is what we know about avocadro: ${textIn}\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/final.txt', textOut);
console.log('File Written Success...!');
*/

// ************************** Asynchronous method (Non-Blocking) **************************//

// importing the fs module
const fs = require('fs');

// Reading datafrom another file -->> callback function -->> (err, data)
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Will read file now...');