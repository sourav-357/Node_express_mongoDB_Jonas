// -------------------------------- Modules --------------------------------//

// console.log(arguments);
// console.log(require("module").wrapper);

// Importing the module (test-module-1.js)
const C = require("./test-module-1");
const cal1 = new C(); // Creating a new object of the C
console.log(cal1.add(2, 5)); // Using the add method of the cal1 we just created
