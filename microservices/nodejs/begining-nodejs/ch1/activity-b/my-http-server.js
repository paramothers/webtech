const http = require('http');

const server= http.createServer( (request, response) => {

    console.log('request receivd');


    response.write('Hello World');
    response.end();
});

server.listen(5000);

console.log('Server listenening at 500');