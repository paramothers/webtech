let obj = {
    name:'param'
};
let personString = '{"name":"pavalan", "age":23}';

let objeStr = JSON.stringify(obj);

console.log(objeStr);
console.log(typeof objeStr);

let person = JSON.parse(personString);
console.log(person);
console.log(typeof person);