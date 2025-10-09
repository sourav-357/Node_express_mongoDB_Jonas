
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

