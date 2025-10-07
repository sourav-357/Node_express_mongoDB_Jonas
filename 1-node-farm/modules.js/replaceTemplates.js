
// Creating a replaceTemplate Function that will replace items
module.exports = (temp, product) => {

     // Now replacing all the nicknames by the actual one by reading data from product.productDetails
     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
     output = output.replace(/{%IMAGE%}/g, product.image);
     output = output.replace(/{%PRICE%}/g, product.price);
     output = output.replace(/{%FROM%}/g, product.from);
     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
     output = output.replace(/{%QUANTITY%}/g, product.quantity);
     output = output.replace(/{%DESCRIPTION%}/g, product.description);
     output = output.replace(/{%ID%}/g, product.id);

     // For replacing the organic part we first need to check
     // If organic then change -->> Otherwise leave it likewise
     if (!product.organic) {
          output = output.replace(/{%NOT_ORGANIC%}/g, 'not-Organic');
     }
     // now returning the Replaced Html files
     return output;
}
