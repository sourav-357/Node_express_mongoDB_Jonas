

// IMPORTING THE REQUIRED MODULES
const fs = require('fs')


// ********************************************** Creating function for user ********************************************** //


// reading the tours data from external module
const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`))


// creating a function for '/api/v1/users' get request 
const getAllUser = (req, res) => {
    res.status(500) // status code for the request 
    res.json({ // sending data in json format 
        status: 'error',
        message: 'This route is yet not defined...!'
    });
}


// creating a function for '/api/v1/users' post request 
const createUser = (req, res) => {
    res.status(500) // status code for the request 
    res.json({ // sending data in json format 
        status: 'error',
        message: 'This route is yet not defined...!'
    });
}


// creating a function for '/api/v1/users/:id' get request 
const getUser = (req, res) => {
    res.status(500) // status code for the request 
    res.json({ // sending data in json format 
        status: 'error',
        message: 'This route is yet not defined...!'
    });
}


// creating a router for '/api/v1/users/:id' patch request to update the information
const updateUser = (req, res) => {
    res.status(500) // status code for the request 
    res.json({ // sending data in json format 
        status: 'error',
        message: 'This route is yet not defined...!'
    });
}


// creating a router for '/api/v1/users/:id' delete request to update the information
const deleteUser = (req, res) => {
    res.status(500) // status code for the request 
    res.json({ // sending data in json format 
        status: 'error',
        message: 'This route is yet not defined...!'
    });
}


// ********************************************** EXPORTING THE FUNCTIONS ********************************************** //

module.exports = {
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    createUser,
}

