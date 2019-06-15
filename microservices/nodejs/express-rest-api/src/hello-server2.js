let http = require('http');
let handleRequest = require('./http-module');

let server = http.createServer(handleRequest.handleRequest);

server.listen(8000, '127.0.0.1', () =>{
    console.log('====================================');
    console.log('server has started at 8000');
    console.log('====================================');
})
