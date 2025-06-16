const fs = require("fs");
const nextTick = require("process");
const crypto = require("crypto");


// -------------------------------- Event Loop in Practice --------------------------------//

/*
// TimeOut Functions are next in the top level codes -->> Not callback and hence top level
setTimeout(() => console.log("Timer 1 finished"), 0);

// Immidiate TimeOut Functions are next in the top level codes -->> Not callback and hence top level
setImmediate(() => console.log("Immidiate 1 Finished"));

// I/O file reading Functions priorities -->> Callback Function
// Using the Async Version of the code
fs.readFile("./test-file.txt", "utf-8", () => {
     // Top level Code inside callback Function
     console.log("I/O Finished");
     console.log("--------------------");

     // Timeout Function is first inside Callback Functions
     setTimeout(() => console.log("Timer 2 finished"), 0);
     // Setting up the limit for the TimeOut Functions
     setTimeout(() => console.log("Timer 3 finished"), 3000);
     // Priority is after the I/O Function
     setImmediate(() => console.log("Immidiate 2 Finished"));

     // Adding a nextTick Callback function now -->> Special Functions That can get executed at any time
     nextTick(() => {
          console.log("Process.nextTick");
     });
});

// The top level Code that will be executed first before anything else
console.log("hello from the top-level Code");
*/

// -------------------------------- Events in Practice --------------------------------//


