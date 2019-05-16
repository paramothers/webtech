const name = {
    a: 1, b: 'Two', c: [3,3,3]
}

console.log('====================================');
console.log(Object.values(name));
console.log('====================================');

console.log('====================================');
console.log(Object.entries(name));
console.log('====================================');

let myMap = new Map(Object.entries({a: 1, b: 2, c: 3}))

console.log('====================================');
console.log(myMap);
console.log('====================================');

console.log("param".padStart(5,'-'));
console.log("param".padEnd(15,'-'));