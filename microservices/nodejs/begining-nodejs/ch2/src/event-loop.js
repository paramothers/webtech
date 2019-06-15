const reque = require('request');
const fs = require('fs');
const fib = require('fibonacci');

process.nextTick( ()=>{
    process.stdout.write("NT #1 \n");
} );


fs.readFile("./server.js", (err, data) => {

    process.stdout.write('1: I/O Polling \n');
});

reque.get( "http://google.com", (err, res, body) => {

   process.stdout.write('2: System polling .\n');
});

setImmediate( () => {
    process.stdout.write(" 3: Set Immediate Phase \n");
});

setTimeout( ()=> {
    process.stdout.write("4: Timer \n");
});
process.stdout.write("5: Fibonaccoi "+fib.iterate(20).number +" callback \n");

process.nextTick( ()=> {
    process.stdout.write(" NT #2 \n");
});