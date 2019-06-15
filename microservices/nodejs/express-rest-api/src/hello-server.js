let http = require('http');

let server = http.createServer( (req, res) => {

    res.writeHead( 200, {
        'Content-Type' : 'text/plain'
    });

    res.end('Hello from node.js');

    console.log('====================================');
    console.log('Hello handler has requested');
    console.log('====================================');
});

server.listen(8180, '127.0.0.1', () => {
    console.log('Server listening at 8180');
});