const http = require('http');
const route = require('./route');

const server = http.createServer(route.routeHandler);
server.listen(3000);

console.log('listening port 3000');