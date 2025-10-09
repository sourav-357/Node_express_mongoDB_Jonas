
// I,porting the required module
const fs = require("fs");
const superagent = require('superagent');


// Creating a new Function to read the file
const readFilePro = (file) => {

    return new Promise ((resolve, reject) => { // reject and resolve promise
        // reading the file
        fs.readFile(file, (err, data) => {
            if (err) reject ('I could not find that file 😭...') // encoutered error
            resolve(data) // Sucessfully read the file
        });
    });
}


// Creating new function for writing file
const writeFilePro = (file, data) => {

    return new Promise((resolve,reject) => { // reject and resolve promise
        // writing the file
        fs.writeFile(file, data, (err) => {
            if (err) reject ('Could not write file 😭') // encoutered error
            resolve('success'); // Sucessfully write the file
        });
    });
}



const getDogPic = async () =>{
    try{
   const data =  await readFilePro(`${__dirname}/dog.txt`);
   console.log(`Breed: ${data}`);

   const res1Pro =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
   const res2Pro =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
   const res3Pro =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
   const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
   const imgs = all.map(el => el.body.message)
   console.log(imgs);

    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved to file!');
}catch (err) {
    console.log(err);
    throw err;
}
    return '2: READY 🐶';
};

(async () => {
    try {
        console.log('1: Will get dog pics!!')
        const x =await getDogPic();
        console.log(x);
        console.log('3: Done getting dog pics!!')

    } catch (err){
        console.log('ERROR 💥');
    }
    }) ();
console.log('1: Will get dog pics!!')
getDogPic().then (x => {

    console.log(x);
    console.log('3: Done getting dog pics!!')
})
.catch(err => {
    console.log('ERROR 💥');
})



readFilePro(`${__dirname}/dog.txt`)
.then(data => {
  console.log(`Breed: ${data}`);
  return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
})
.then(res => {
  console.log(res.body.message);
  return writeFilePro('dog-img.txt', res.body.message);
})
.then(() => {
  console.log('Random dog image saved to file!');
})
.catch(err => {
  console.log(err);
});
