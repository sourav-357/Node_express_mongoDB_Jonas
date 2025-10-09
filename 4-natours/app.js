
// ************************************* Learning Basics of express ************************************* //

/*
// Importing the required modules
const express = require('express');
const http = require('http');


const app = express(); // Creating a server
const port = 3000; // Creating a port number 


// Routing the server for '/get' method 
app.get('/', (req, res) => {
    res.status(404) // setting up the status code
    res.json({ // sending response to the browser
        message: 'Hellooo from the server side',
        app: 'Natours',
    });
});


// routing the server for '/' post method
app.post('/', (req, res) => {
    res.status(200); // status code for the request
    res.send('Data sent success ....!'); // replying to the request 
});


// starting the server 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});
*/


// ************************************* starting our main project ************************************* //


// Importing the required modules
const express = require('express');
const http = require('http');
const fs = require('fs');


const app = express(); // Creating a server
const port = 3000; // Creating a port number 


// reading the tours data from external module
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.js`));


// creating a router for '/api/v1/tours' get request 
app.get('/api/v1/tours', (req, res) => {
    res.status(200) // status code for the request 
    res.json({ // sending data in json format 
        status: 'success',
        data: { tours },
    });
});


// starting the server 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});