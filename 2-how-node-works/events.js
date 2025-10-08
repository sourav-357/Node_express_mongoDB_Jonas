const EventEmitter = require("events");
const http = require("http");

// -------------------------------- Events in Practice --------------------------------//

// creating a new Event
const myEmitter = new EventEmitter();

// Listining to event Emitter
myEmitter.on("newSale", () => {
     // Function to be executed after listening
     console.log("There is a new Sale");
});
// listining to the event Emitter
myEmitter.on("newSale", () => {
     // Function to be executed after listening
     console.log("Customer name is Sourav Kumar!");
});
// Creating one more Listener of the Event Emitter
myEmitter.on("newSale", (stock) => {
     console.log(`There are now ${stock} items left in the stock!`);
});
// Creating a event Emitter
myEmitter.emit("newSale", 9);

// -------------------------------- Creating own Events --------------------------------//

// Creating a new server
const server = http.createServer();

// listining to the server with inbuilt emitter "request"
server.on("request", (req, res) => {
     console.log("Listining to the server requests");
     res.end("Request recieved");
});

// Again listining to the server with inbuilt emitter "request"
server.on("request", (req, res) => {
     console.log("Listining to the server requests again");
});

// Again listining to the server with inbuilt emitter "close"
server.on("close", () => {
     console.log("Server Closed!");
});

// Assign the server address 
server.listen(8000, "127.0.0.1", () => {
     console.log("Waiting for requests ...");
});

// -------------------------------- Created own Server --------------------------------//