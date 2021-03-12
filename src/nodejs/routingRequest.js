var http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer(function (request, response) {

    const url = request.url;
    const method = request.method;

    response.setHeader('Content-type','text/html')

    if(url === '/'){
        response.write(`
            <html>
                <head>
                    <title>Hello World</title>
                </head>
                <body>
                    <form method="POST" action="/log">
                        <input type="text" name="message">
                        <button type="submit">Save</button>
                    </form>
                </body>
            </html>
        `);
        return response.end();
    }
    if(url ==='/log' && method==='POST'){

        //body parsing
        const body =[]
        request.on('data',(chunk)=>{
            body.push(chunk)
            // console.log(chunk);
        });
        request.on('end',()=>{
            const bodyParsed = Buffer.concat(body).toString();
            const message = bodyParsed.split('=')[1];
            console.log(querystring.parse(bodyParsed));
            // console.log(bodyParsed);
            fs.appendFileSync('message.txt',message);
        });

        response.statusCode = 302;
        response.setHeader('Location','/');
        return response.end();
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');