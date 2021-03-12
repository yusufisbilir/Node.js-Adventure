const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    // res.setHeader('Content-type','text/plain');
    // res.setHeader('Content-type','application/json')
    // res.statusCode = 200;
    // res.statusMessage = 'OK';
    // res.write(JSON.stringify({name:'lenovo', price:5000}));  //json
    // res.end();


    //serve a html
    fs.readFile('index.html',function(err,data){
        if(err){
            res.setHeader('Content-type','text/plain');
            res.statusCode = 404;
            res.statusMessage = 'not found'
            res.end('File not found');
        }
        else{
            res.setHeader('Content-type','text/html');
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.end(data)

        };
    });

});server.listen(3000);


console.log('listening port on 3000');