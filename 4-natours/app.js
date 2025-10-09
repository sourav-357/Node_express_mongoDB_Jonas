
// Importing the required modules
const express = require('express');
const http = require('http');


const app = express(); // Creating a server
const port = 3000; // Creating a port number 


// Routing the server 
app.get('/', (req, res) => {
    res.status(200) // setting up the status code
    res.json({ // sending response to the browser
        message: 'Hellooo from the server side',
        app: 'Natours',
    });
});


// starting the server 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});

