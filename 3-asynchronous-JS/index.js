const fs = require('fs');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
     console.log(`Breed: ${data}`);
})