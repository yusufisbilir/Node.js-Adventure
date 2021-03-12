const path = require('path');   //node module

let result = path.resolve('path.js');   //file path

result = path.extname('path.js');   //.js

result = path.parse(__filename);

console.log(result.root);   // C:\
console.log(result.ext);    // .js
console.log(result.name);   // path

// console.log(result);