const a = 1, b = 2, c = 3;

const myObj = {
    a,
    b,
    c
}

console.log(myObj.a);
console.log(myObj.b);
console.log(myObj.c);


const lib = ( () => {

    function sum(a, b) {return a + b};
    function mul(a,b){ return a * b};
    
    return {
        sum,
        mul
    };

})();

console.log(lib.sum(1,3));
console.log(lib.mul(2,3));


const lib2 = {

    sum(a,b) {return a + b},
    mul(a,b) {return a * b}
}

console.log(lib2.mul(2,4));

const key2 = 'name';
const lib3 = {


    sum: (a,b) => a+b,
    mul: (a,b) => a*b
}

lib3[key2] = 'paramasivam';

console.log(lib3.mul(2,4));

console.log(lib3.name);


const i = 2;
const temp = {
    ['param'+i] : () => { console.log('haa... haa');console.log('haa... haa');}
}

console.log(temp.param2());

({param2:mymetd} = temp);

mymetd();