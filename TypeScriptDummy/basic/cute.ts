function allTest(fist, ...last) {
    console.log(fist);
    console.log(last);
}


allTest(1);
allTest(2, 3, 4, 5);

let foo = 123;
if (true) {
    let foo = 456;
}

console.log(foo);

var foo2 = 123;
if (true) {
    var foo2 = 456;
}

console.log(foo2);

var index = 0;
let simple = [1, 2, 3];

for (let index = 0; index < simple.length; index++) {

    console.log(simple[index]);
}

console.log(index);