
// importing the required modules 
const express = require('express')
const fs = require('fs')

// importing the tour functions from tour controller file
const { getAllUser, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController.js')


// *********************************************** CREATING ROUTERS FOR USER ***********************************************//


const router = express.Router() // express.Router() will help us to route all request at one place

// matching the routes for tours to their functions
router.route('/').get(getAllUser).post(createUser) 
// get request on '/api/v1/tours' will call getAllTour and post on '/api/v1/tours' will call createTour
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)


// exporting the router
module.exports = router

