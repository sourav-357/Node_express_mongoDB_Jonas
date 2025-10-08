
// Importing the required modules
const fs = require('fs');


// Creating some timeout function
setTimeout(() => console.log('Timer 1 Finished...'), 0);

// creating some Immediate function
setImmediate(() => console.log('Immediate 1 Finished...'));

// reading file from another module by help of async fumction 
fs.readFile('./test-file.txt', 'utf-8', (err, data) => {
    console.log('Input/Output finished...');
});

// Top level code that is not under any callbacks 
console.log('Heloooo from the top level code ...');