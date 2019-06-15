const Hapi = require('hapi');

//create server
const server = new Hapi.Server();

//server connection details
server.connection({
    host: 'localhost',
    port: 8000
});

server.start( (err) => {

    if(err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});