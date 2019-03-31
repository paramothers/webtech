let a = 1;
let b = 2;
let valObject = {a:a, b:b}

let secondObject = {a,b}

console.log(valObject);
console.log(secondObject);

let objType = "Vechile";

let object3 = {
    ["get"+objType]() {

        return "Ford";
    }
}

// console.log(object3.getVechile());
Object.defineProperty(object3,'getVechile', {configurable:false})
// console.log(Object.getOwnPropertyDescriptor(object3, 'getVechile'));


let a3 = {};
Object.assign(a3, object3);
console.dir(a3);

console.log(Object.assign({a:1, b:2}, {a:2}, {b:3}, {c:5}, {d:14}));

console.log('--------------------');

console.log(NaN === NaN);
console.log(-0 === +0);
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, +0));

console.log('===========');

let config = {
    server: 'localhost',
    port: '8080',
    timeout: 90
}

let {server, port} = config;
console.log(`Server ${server} and port ${port}`);

let server1='127.0.0.1'; 
let port1 ='80';
let timeout1 ='100';
function startServer(configValue){ 
    console.log(configValue)
} 

startServer({server,port,timeout} = config)


let a2 = 1, b2 = 2;
[b2,a2] = [a2,b2];
console.log(a2, b2);

const [x, ...y] = ['a', 'b', 'c'];
console.log(x);
console.log(y);



