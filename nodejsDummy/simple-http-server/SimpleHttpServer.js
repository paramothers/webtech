let http = require('http');
let url = require('url');
let fibonacc = require('./Fibnacci').myFib;

let server = http.createServer((req, res) => {

    const urlP = url.parse(req.url, true);
    let fibo;    
    
    res.writeHead(200, {'Content-Type':'text/plain'});
    console.log(` number ${urlP.query['n']}`)
    if(urlP.query['n']){
         console.log('inside of iff')
         fibonacc(urlP.query['n'], (resulst) => {

            console.log('inside callback')
             res.end(`Fibonacci ${urlP.query['n']} = ${resulst}`)
        });
        console.log('inside completed');
    }else{
        res.end(`USAGE: http://localhost:8200?n=##`);
    }
});

server.listen(8200,'127.0.0.1');
console.log('Simple Http Server running at 8200');