
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






// ***************************************************** small step for our project ***************************************************** //



/*
// Importing the required modules
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')


const app = express() // Creating a server
const port = 3000 // Creating a port number 


// using a middlewere 
app.use(express.json()) // it converts the incomming data from post request to json
app.use(morgan('dev')) // to console.log the information about the requested url by the browser



// ********************************************** Creating function for user ********************************************** //



// reading the tours data from external module
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))


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
}


// creating a function for '/api/v1/tours/:id' patch request to update the information
const updateTour = (req, res) => {
    
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
}


// creating a function for '/api/v1/tours/:id' delete request to update the information
const deleteTour = (req, res) => {
    
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
}



// ********************************************** Creating function for user ********************************************** //



// reading the tours data from external module
const users = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/users.json`))


// creating a function for '/api/v1/users' get request 
const getAllUsers = (req, res) => {
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


// ********************************************** Creating Routes ********************************************** //


// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);


// matching the routes for tours to their functions
app.route('/api/v1/tours').get(getAllTours).post(createTour) 
// get on '/api/v1/tours' will call getAllTour and post on '/api/v1/tours' will call createTour
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)


// matching the routes for user to their functions
app.route('/api/v1/users').get(getAllUsers).post(createUser)
// get on '/api/v1/users' will call createUser and post on '/api/v1/users' will call createUser
app.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser)



// ********************************************** Starting server ********************************************** //



// starting the server 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});



*/
// ********************************************** Completed the basic ********************************************** //






// WE ARE STARTING AGAIN AS THERE ARE NOW LOT OF CHANGES THAT ARE GONNA TAKE PLACE IN THE ROUTES PART 
// JUST SO THAT I WON'T BE ABLE TO UNDERSTAND IT LATER THAT WHY THIS IS AND WHAT SHOULD BE THERE INSTEAD OF THIS 
// I AM CREATING A NEW START SO THAT I COLUD HAVE MY EARLIER CODES


// THE MAIN REASON IS THAT THERE WERE CHANEGS IN THE ROUTERS PART -->> LOTS OF CHANGES







// ********************************************** starting again for clartity ********************************************** //


/*
// Importing the required modules
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')


const app = express() // Creating a server
const port = 3000 // Creating a port number 


// using a middlewere 
app.use(express.json()) // it converts the incomming data from post request to json
app.use(morgan('dev')) // to console.log the information about the requested url by the browser



// ********************************************** Creating function for tours ********************************************** //



// reading the tours data from external module
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))


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
}


// creating a function for '/api/v1/tours/:id' patch request to update the information
const updateTour = (req, res) => {
    
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
}


// creating a function for '/api/v1/tours/:id' delete request to update the information
const deleteTour = (req, res) => {
    
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
}



// ********************************************** Creating function for user ********************************************** //



// reading the tours data from external module
const users = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/users.json`))


// creating a function for '/api/v1/users' get request 
const getAllUsers = (req, res) => {
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


// ********************************************** Creating Routes ********************************************** //



// 1) CREATING ROUTERS FOR TOURS
const tourRouter = express.Router() // express.Router() will help us to route all request at one place
app.use('/api/v1/tours', tourRouter) // this is now set as start point for tourRouter and will respond to request made after '/api/v1/tours'


// matching the routes for tours to their functions
tourRouter.route('/').get(getAllTours).post(createTour) 
// get request on '/api/v1/tours' will call getAllTour and post on '/api/v1/tours' will call createTour
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)





// 2) CREATING ROUTERS FOR USERS
const userRouter = express.Router() // express.Router() will help us to route all request at one place
app.use('/api/v1/users', userRouter) // this is now set as start point for userRouter and will respond to request made after '/api/v1/users'

// matching the routes for user to their functions
userRouter.route('/').get(getAllUsers).post(createUser)
// get request on '/api/v1/users' will call createUser and post on '/api/v1/users' will call createUser
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)



// ********************************************** Starting server ********************************************** //



// starting the server 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});


*/
// ****************************************************** Completed ****************************************************** //







// WE ARE STARTING AGAIN AS THERE ARE NOW LOT OF CHANGES THAT ARE GONNA TAKE PLACE IN THE ROUTES PART 
// JUST SO THAT I WON'T BE ABLE TO UNDERSTAND IT LATER THAT WHY THIS IS AND WHAT SHOULD BE THERE INSTEAD OF THIS 
// I AM CREATING A NEW START SO THAT I COLUD HAVE MY EARLIER CODES


// THE MAIN REASON IS THAT THERE WERE CHANEGS IN THE ROUTERS PART -->> LOTS OF CHANGES
// I DON'T WANNA LOOSE THE CHANGES I HAVE MADE TILL NOW







// ********************************************** starting again for clartity ********************************************** //



// Importing the required modules
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')


const app = express() // Creating a server
const port = 3000 // Creating a port number 


// using a middlewere 
app.use(express.json()) // it converts the incomming data from post request to json
app.use(morgan('dev')) // to console.log the information about the requested url by the browser



// ********************************************** Creating Routes ********************************************** //


const tourRouter = require('./routes/tourRoutes') // importing the tour router
app.use('/api/v1/tours', tourRouter) // this is now set as start point for tourRouter and will respond to request made after '/api/v1/tours'

const userRouter = require('./routes/userRoutes.js') // importing the tour router
app.use('/api/v1/users', userRouter) // this is now set as start point for userRouter and will respond to request made after '/api/v1/users'




// ********************************************** Starting server ********************************************** //



// starting the server 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});



// ********************************************** Completed ********************************************** //
