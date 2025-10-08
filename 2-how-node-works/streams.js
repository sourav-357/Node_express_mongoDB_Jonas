
// importing the required module
const fs = require("fs");

// Creating a server with less code and directly importing the https module
const server = require("http").createServer();

// Starting the server now on request
server.on("request", (req, res) => {

     //Solution 1 to read and write file
     // fs.readFile('test-file.txt', 'utf-8', (err, data) => { // Reading the data
     //      if (err) { // Handaling the error
     //           console.log(err);
     //      }
     //      res.end(data); // Printing the data on the web page
     // })

     // Solution 2 for reading and writing the data
     const readable = fs.createReadStream("./test-file.txt"); // -->> This will read the file once its on

     // starting the readable
     readable.on("data", (chunk) => {
          // This will start to read the "data" in "chunks"
          res.write(chunk); // that chunk will start to get displayed
     });

     // when the entire content is read then we need to stop
     readable.on("end", () => {
          res.end();
     });
});

// server starting at the port
server.listen(8000, "127.0.0.1", () => {
     // Listening the server
     console.log("listining to server at port 8000 ...!");
});

// -------------------------------- Streams Completed--------------------------------//