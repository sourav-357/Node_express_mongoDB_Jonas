
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


/*
// importing the fs module
const fs = require('fs');

// Reading datafrom another file -->> callback function -->> (err, data)
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {

    // Reading file 'read-this.txt' and storing data as data 2
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);

        // Reading another file with data as data3
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            // writting the data2 and data3 in final.txt file
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
                console.log('Data is written successfully...!🙂');

                // reading the final data of final.txt
                fs.readFile('./txt/final.txt', 'utf-8', (err, data) => {
                    console.log(data);
                })
            });
        });
    });
});

// writing something to see if the async code works or not
console.log('Will read file now...');
*/


// ************************** Asynchronous method (Non-Blocking) **************************//


// 