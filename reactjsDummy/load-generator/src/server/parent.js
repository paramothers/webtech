const {fork} = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
    console.log(`Message from Child ${msg.counter}`);
})

forked.send({hello: 'World'});