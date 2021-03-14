const path = require("path"); //node module

let result = path.resolve("path.js"); // thisfile path

result = path.extname("path.js"); //.js

result = path.parse(__filename); // return object

console.log(result.root); // C:\
console.log(result.ext); // .js
console.log(result.name); // path

// console.log(result); 