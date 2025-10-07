
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
    if(err) return console.log('ERROR...!!');

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


// ************************** Creating a server **************************//


// Importing the required modules
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


// Reading the data from the file ./dev-data/data.json
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

// parsing and storing data
const dataObj = JSON.parse(data);


// Creating a first server
const server = http.createServer((req, res) => {

    // storing the requsested url
    const pathName = req.url;

    // Routing to the /overview request page
    if (pathName === '/overview' || pathName === '/') {
        res.end('This is the OVERVIEW');

    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');

    } else if(pathName === '/api') {

        // Telling the browser about the status code and the type of content we are sending
        res.writeHead(200, { 
            'content-type': 'application/json' 
        });

        // Sending the data to the browser 
        res.end(data);

    } else {
        // Telling the browser about the status code and the type of content we are sending
        res.writeHead(404, {
            'content-type': 'text/html',
        });

        // replying to the request
        res.end('<h1>Page not found</h1>')
    }
});

// starting the server at any port 
server.listen(8000, () => {
    console.log('Listining to server at port 8000...😊')
});