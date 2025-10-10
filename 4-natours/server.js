
// importing the required module
const app = require('./app.js')



// ********************************************** Starting server ********************************************** //


const port = 3000 // Creating a port number 
app.listen(port, () => {
    console.log(`App running on port ${port} ....!`)
});

