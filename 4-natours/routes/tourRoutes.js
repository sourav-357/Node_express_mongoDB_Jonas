
// importing the required modules
const express = require('express')

// importing the tour functions from tour controller file
const { getAllTours, getTour, createTour, updateTour, deleteTour } = require('../controllers/tourController.js')


// *********************************************** CREATING ROUTERS FOR TOURS ***********************************************//


const router = express.Router() // express.Router() will help us to route all request at one place

// matching the routes for tours to their functions
router.route('/').get(getAllTours).post(createTour) 
// get request on '/api/v1/tours' will call getAllTour and post on '/api/v1/tours' will call createTour
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)


// exporting the router
module.exports = router

