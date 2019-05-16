let obj = {
    things: 4
}

let addThings = function(a,b,c) { return this.things + a+ b + c };

console.log('=========== context we pass =========');
console.log(addThings.call(obj, 1,3,6));
console.log('==========================');


let arr = [1,3,6]
console.log('=========== context and parameters in array we pass =========');
console.log(addThings.apply(obj, arr));
console.log('==========================');

console.log('=========== context for bind =========');
console.log(addThings.bind(obj, 1,3,6)());
console.log(addThings.bind(obj)( 1,3,6));
console.log('==========================');