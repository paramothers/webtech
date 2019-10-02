console.log('hai param-pavalan');

let square = (x) => {
    return x * x;
}

console.log(square(12));

let user = {
    name: 'param',
    sayHi: () => {
        console.log(`arrow Hai ${this.name}`);
        console.log(arguments);
    },
    sayHiAlt(){
        console.log(`literal Hai ${this.name}`);
        console.log(arguments);
        console.log(`arguments ${arguments.callee}`);
    }
}

user.sayHi(23);
user.sayHiAlt(1,2,3);