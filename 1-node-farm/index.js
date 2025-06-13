const fs = require('fs');
const http = require('http');
const url = require('url');


/*
// ------------------------ Reading and writting files Synchronically------------------------//

// Reading content from the file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

// Definign what to write in the file
const textOut = `This is what we know about avacado: ${textIn}\nCreated on ${Date.now()}`;
console.log(textOut);

// Writting a file 
fs.writeFileSync('./txt/output.txt', textOut);
console.log(`File written!`);


// ------------------------ Reading and writting files Asynchronically ------------------------//

fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
     console.log(data);
});
console.log("will read file!");


// reading files asynchronically by callback hell method
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
          console.log(data2);
          fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
               console.log(data3);

               // writting the file asynchronously 
               fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, 'utf-8', (err) => {
                    console.log(`Your file has been written 😊`);
               })
          });
     });
});
console.log("will read file!");
console.log(fs.readFileSync(`./txt/final.txt`, 'utf-8'));
*/

// ------------------------ Routing ------------------------//

/*
// Creating a server
const server = http.createServer((req, res) => {

     // Getting url of requested server
     const pathName = req.url;

     // Responding as per server request
     if (pathName === '/overview' || pathName === '/') {
          res.end("This is the Overview");
     } else if (pathName === '/Product') {
          res.end("This is the product");
     } else {
          res.writeHead(404, {
               'content-type': 'text.html',
               'my-own-header': 'hello-world'
          });
          res.end("<h1>Page not found</h1>");
     }
});

// Starting a server 
server.listen(8000, '127.0.0.1', () => {
     console.log('Listining to requests on port 8000');
});
*/

// ------------------------ Building a simple API ------------------------//

/*
// Reading the file
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

// Creating a server
const server = http.createServer((req, res) => {

     // Getting url of requested server
     const pathName = req.url;

     // Responding as per server request
     if (pathName === '/overview' || pathName === '/') {
          res.end("This is the Overview");
     } else if (pathName === '/Product') {
          res.end("This is the product");
     } else if (pathName === '/api') {

          // Showing the data for requested url
               res.writeHead(200, {'content-type': 'application/json'});
               res.end(data);

     } else {
          res.writeHead(404, {
               'content-type': 'text/html',
               'my-own-header': 'hello-world'
          });
          res.end("<h1>Page not found</h1>");
     }
});

// Starting a server 
server.listen(8000, '127.0.0.1', () => {
     console.log('Listining to requests on port 8000');
});
*/


// ------------------------ Building the templates ------------------------//


// Reading the file
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

// Creating a server
const server = http.createServer((req, res) => {

     // Getting url of requested server
     const pathName = req.url;

     // Responding as per server request
     if (pathName === '/overview' || pathName === '/') {
          res.end("This is the Overview");
     } else if (pathName === '/Product') {
          res.end("This is the product");
     } else if (pathName === '/api') {

          // Showing the data for requested url
               res.writeHead(200, {'content-type': 'application/json'});
               res.end(data);

     } else {
          res.writeHead(404, {
               'content-type': 'text/html',
               'my-own-header': 'hello-world'
          });
          res.end("<h1>Page not found</h1>");
     }
});

// Starting a server 
server.listen(8000, '127.0.0.1', () => {
     console.log('Listining to requests on port 8000');
});
