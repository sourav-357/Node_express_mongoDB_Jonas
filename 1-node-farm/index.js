const fs = require('fs');
const http = require('http');
const url = require('url');



// ----------------------------------- Reading and writting files Synchronically -----------------------------------//

/*
// Reading content from the file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

// Definign what to write in the file
const textOut = `This is what we know about avacado: ${textIn}\nCreated on ${Date.now()}`;
console.log(textOut);

// Writting a file 
fs.writeFileSync('./txt/output.txt', textOut);
console.log(`File written!`);


// ----------------------------------- Reading and writting files Asynchronically -----------------------------------//


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

// ----------------------------------- Routing -----------------------------------//

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

// ----------------------------------- Building a simple API -----------------------------------//

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


// ----------------------------------- Filling the templates -----------------------------------//

/*
// Reading the Json file
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Reading the files Seperately 
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

// Creating a replaceTemplate Function that will return the 
const replaceTemplate = (temp, product) => {

     // Now replacing all the nicknames by the actual one by reading data from product.productDetails
     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
     output = output.replace(/{%IMAGE%}/g, product.image);
     output = output.replace(/{%PRICE%}/g, product.price);
     output = output.replace(/{%FROM%}/g, product.from);
     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
     output = output.replace(/{%QUANTITY%}/g, product.quantity);
     output = output.replace(/{%DESCRIPTION%}/g, product.description);
     output = output.replace(/{%ID%}/g, product.id);

     // For replacing the organic part we first need to check
     // If organic then change -->> Otherwise leave it likewise
     if (!product.organic) {
          output = output.replace(/{%NOT_ORGANIC%}/g, 'not-Organic');
     }
     // now returning the Replaced Html files
     return output;
}

// Creating a server
const server = http.createServer((req, res) => {

     // Getting url of requested server
     const pathName = req.url;

     // Responding as per server request -->> Overview webpage
     if (pathName === '/overview' || pathName === '/') {

          // Telling the Node about the type of content
          res.writeHead(200, {'content-type': 'text/html'});

          // Replacing content of the template card
          const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join();
          const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

          // Showing the Content for the requested web page
          res.end(output);

     // Product Web page Loading
     } else if (pathName === '/Product') {
          res.end("This is the product");

     // API Page -->> 127.0.0.1:8000/api
     } else if (pathName === '/api') {
          // Showing the data for requested url
          res.writeHead(200, {'content-type': 'application/json'});
          res.end(data);

     // Not found Web Page -->> Invalid url
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


// ----------------------------------- Creating Product WebPages -----------------------------------//


// Reading the Json file
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Reading the files Seperately 
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

// Creating a replaceTemplate Function that will return the 
const replaceTemplate = (temp, product) => {

     // Now replacing all the nicknames by the actual one by reading data from product.productDetails
     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
     output = output.replace(/{%IMAGE%}/g, product.image);
     output = output.replace(/{%PRICE%}/g, product.price);
     output = output.replace(/{%FROM%}/g, product.from);
     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
     output = output.replace(/{%QUANTITY%}/g, product.quantity);
     output = output.replace(/{%DESCRIPTION%}/g, product.description);
     output = output.replace(/{%ID%}/g, product.id);

     // For replacing the organic part we first need to check
     // If organic then change -->> Otherwise leave it likewise
     if (!product.organic) {
          output = output.replace(/{%NOT_ORGANIC%}/g, 'not-Organic');
     }
     // now returning the Replaced Html files
     return output;
}

// Creating a server
const server = http.createServer((req, res) => {

     // Destructing the req.url to get the pathname and query(id of the product)
     const {query, pathname} = url.parse(req.url, true);  // from the console.log coz of above code block 

     // Responding as per server request -->> Overview webpage -->> 127.0.0.1:8000/overview
     if (pathname === '/overview' || pathname === '/') {

          // Telling the Node about the type of content
          res.writeHead(200, {'content-type': 'text/html'});

          // Replacing content of the template card
          const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
          const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

          // Showing the Content for the requested web page
          res.end(output);

     // Product Web page Loading -->> 127.0.0.1:8000/product?id=x
     } else if (pathname === '/product') {
          
          // Telling the Node about the type of content
          res.writeHead(200, {'content-type': 'text/html'});

          // Extracting information about a specific id product from dataObj at line 202
          const product = dataObj[query.id];
          // Replacing the contents of the template-product.html
          const output = replaceTemplate(tempProduct, product);
          // showing the new Content
          res.end(output);

     // API Page -->> 127.0.0.1:8000/api
     } else if (pathname === '/api') {
          // Showing the data for requested url
          res.writeHead(200, {'content-type': 'application/json'});
          res.end(data);

     // Not found Web Page -->> Invalid url
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
