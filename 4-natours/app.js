
// Importing the required modules
const express = require('express');
const http = require('http');

// Creating a server
const app = express();


// Creating a port number 
const port = 3000;


// Routing the server 
app.get('/', (req, res) => {
    res.status(200)
    res.send('Hellooo from the server side ....!')
});


// starting the server 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});

