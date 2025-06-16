const fs = require("fs");

// TimeOut Functions are next in the top level codes -->> Not callback and hence top level
setTimeout(() => console.log("Timer 1 finished"), 0);

// Immidiate TimeOut Functions are next in the top level codes -->> Not callback and hence top level
setImmediate(() => console.log("Immidiate 1 Finished"));

// I/O file reading Functions priorities -->> Callback Function
fs.readFile("./test-file.txt", "utf-8", () => {
     // Using the Async Version of the code

     // Top level Code inside callback Function
     console.log("I/O Finished");
     console.log("--------------------");

     // Timeout Function is first inside Callback Functions
     setTimeout(() => console.log("Timer 1 finished"), 0);

     // Setting up th etim elimit for the TimeOut Functions
     setTimeout(() => console.log("Timer 1 finished"), 3000);

     // Priority is after the I/O Function
     setImmediate(() => console.log("Immidiate 1 Finished"));
});

// The top level Code that will be executed first before anything else
console.log("hello from the top-level Code");
