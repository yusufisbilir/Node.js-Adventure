const fs = require('fs');
const readStream = fs.createReadStream('./streamfile.txt',{encoding:'utf-8'})

readStream.on('data',(data)=>{
    console.log(data);
});