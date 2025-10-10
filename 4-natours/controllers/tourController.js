
// IMPORTING THE REQUIRED MODULES
const fs = require('fs')


// ********************************************** Creating function for tours ********************************************** //


// reading the tours data from external module
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

// creating function to checkId is valid or not 
const checkId = (req, res, next, val) => {
    console.log(`Tour id is ${val}`)

    if (req.params.id * 1 >= tours.length) {
        return res.status(404).json({
            status: 'Failed...!', 
            err: `No data found for id:${val}`
        })
    }
    next() // to proceed the to next step otherwise we will be stuck here 
}


// function to check if the created tour have name and price property
const checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'Fail',
            message: 'Missing name or price property...!'
        })
    }
    next() // to proceed the to next step otherwise we will be stuck here 
}


// creating a function for '/api/v1/tours' get request 
const getAllTours = (req, res) => {
    res.status(200) // status code for the request 
    res.json({ // sending data in json format 
        status: 'success',
        results: tours.length, // to get the total number of destinations
        data: { tours },
    });
}


// creating a function for '/api/v1/tours' post request 
const createTour = (req, res) => {
    
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


// creating a function for '/api/v1/tours/:id' get request 
const getTour = (req, res) => {

    // console.log(req.params) // to see which id is been asked for 
    const id = req.params.id * 1 // id is converted to number from string by multiplying with 1

    // finding and storing the data of the tour that matches the tour id by help of tours.find() -->> as tours have data of all the tour
    const tour = tours.find((element) => element.id === id) 
    res.status(200) // status code for the request 
    res.json({ // sending data in json format 
        status: 'Success',
        data: { tour },
    });
}


// creating a function for '/api/v1/tours/:id' patch request to update the information
const updateTour = (req, res) => {
    res.status(200) // setting the status code
    res.json({ // sending response to url
        status: 'Success',
        data: 'Updated tour here...!'
    });
}


// creating a function for '/api/v1/tours/:id' delete request to update the information
const deleteTour = (req, res) => {
    res.status(200) // setting the status code
    res.json({ // sending response to url 
        status: 'Success',
        data: null,
    });  
}


// ********************************************** EXPORTING THE FUNCTIONS ********************************************** //


module.exports = {
    getAllTours,
    getTour,
    updateTour,
    deleteTour,
    createTour,
    checkId,
    checkBody,
}

