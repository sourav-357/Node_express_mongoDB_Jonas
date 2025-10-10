
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






// ***************************************************** starting our main project ***************************************************** //




// Importing the required modules
const express = require('express');
const http = require('http');
const fs = require('fs');


const app = express(); // Creating a server
const port = 3000; // Creating a port number 


// using a middlewere 
app.use(express.json()) // it converts the incomming data from post request to json


// reading the tours data from external module
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));



// creating a function for '/api/v1/tours' get request 
const getAllTours = (req, res) => {
    res.status(200) // status code for the request 
    res.json({ // sending data in json format 
        status: 'success',
        results: tours.length, // to get the total number of destinations
        data: { tours },
    });
}



// creating a router for '/api/v1/tours' get request 
const createNewTour = (req, res) => {
    
    const newId = tours.length; // setting up the id for the new tour
    const newTour = Object.assign({id: newId}, req.body) // it will store the data in form of Object hence we used object.assign()
    // we want the id to be newId hence we passed that and then all the data from req.body to be put underthe newTour 
    // That is why we passed the req.body, and also to set the id of that newTour we have to pass {id: newId}

    tours.push(newTour) // adding the new tour to the tour arrays

    // putting the newly created tour to teh list of old tours
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), 'utf-8', (err) => {
        res.status(201) // status code for created
        res.json({ // sending the data 
            status: 'Success',
            data: { newTour },
        });
    });
}



// matching the routes to their functions 
app.get('/api/v1/tours', getAllTours);
app.post('/api/v1/tours', createNewTour);



// creating a router for '/api/v1/tours/:id' get request 
app.get('/api/v1/tours/:id', (req, res) => {

    console.log(req.params) // to see which id is been asked for 
    const id = req.params.id * 1 // id is converted to number from string by multiplying with 1

    // if we are trying to access the data of id that is not in our list 
    if (id >= tours.length) {
        return res.status(404).json({
            status: 'Failed...!', 
            err: `No data found for id:${id}`
        });
    }
    
    // finding and storing the data of the tour that matches the tour id by help of tours.find() -->> as tours have data of all the tour
    const tour = tours.find((element) => element.id === id) 
    res.status(200) // status code for the request 
    res.json({ // sending data in json format 
        status: 'Success',
        data: { tour },
    });
});



// creating a router for '/api/v1/tours/:id' patch request to update the information
app.patch('/api/v1/tours/:id', (req, res) => {
    
    // if we are trying to access the data of id that is not in our list 
    if (req.params.id * 1 >= tours.length) {
        return res.status(404).json({
            status: 'Failed...!', 
            err: `No data found for id:${id}`
        });
    }
    res.status(200) // setting the status code
    res.json({ // sending response to url
        status: 'Success',
        data: 'Updated tour here...!'
    });
});



// creating a router for '/api/v1/tours/:id' patch request to update the information
app.delete('/api/v1/tours/:id', (req, res) => {
    
    // if we are trying to access the data of id that is not in our list 
    if (req.params.id * 1 >= tours.length) {
        return res.status(204).json({
            status: 'Failed...!', 
            err: `No data found for id:${id}`
        });
    }
    res.status(200) // setting the status code
    res.json({ // sending response to url 
        status: 'Success',
        data: null,
    });  
});



// starting the server 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});

