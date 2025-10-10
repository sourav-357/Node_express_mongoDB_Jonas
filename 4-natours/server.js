
// importing the required module
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const app = require('./app.js')


// ********************************************** Starting server ********************************************** //


console.log(process.env.NODE_ENV)

const port = process.env.PORT || 3000 // Creating a port number 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});

