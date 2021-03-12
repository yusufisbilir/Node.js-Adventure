const http = require('http');

//create a server
const server = http.createServer((req,res)=>{
    if(req.url=='/'){   //main directory
        res.write('main directory');
        res.end();
    }
    if(req.url =='/api/products'){
        res.write('product list')
        res.end()
    }
});


server.listen(3000);

console.log('listening port on 3000');