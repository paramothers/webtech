let o = {};
let o2 = new Object();
console.log(o2.toString());
console.log(o2.valueOf());
console.log("an Object is "+o2);

let as = new Array(1,3,5,'param');
let as2 = new Array(3);

console.log(as);
console.log(as.toString());
console.log(as.valueOf());
console.log(as.constructor);

const doSomething = () => {
 
    console.log(Array.from(arguments));
    
}
console.log('----------------------');

// doSomething();

let myArray = new Array("Hai");
let myArray2 = new Array(1);
console.log(myArray);
console.log(myArray2);


let arr = [1,3,5,5,6,7];
for(const index of arr.keys()){
  console.log(index);  
}

for(const valu of arr.values()){
  console.log(valu);  
}

for(const [index, value] of arr.entries()){
  console.log(index, value);
}


let myArrayOf = Array.of(1,3,5,'param');
console.log(myArrayOf.find( n => n === 3));
console.log(myArrayOf.findIndex( n => n === 3));

console.log('----------');

let sumFun = new Function('a','b','return a+b');
console.log(sumFun(2,4));
console.log(sumFun.constructor);
console.log(sumFun.length);
console.log(sumFun.prototype);


console.log('????');
function ab() {

}

console.log(ab.constructor);
console.log(ab.length);
console.log(ab.prototype);

console.log('=====');

function myfunc(){

}
console.log(myfunc.toString());


let someObj = {

    name: 'Param',
    say: function (who) {

       return 'Haya '+who+', I ama  '+ this.name;
    }
}

console.log(someObj.say('param'));

let secObje = {
    name: 'Subscription'
}


console.log(someObj.say.apply(secObje,['param']));

let greeter = {
    default: "HEllow",
    greet: function(names){
        let that = this;
        names.forEach(function (element){            
            console.log(that.default+ element);            
        });
        // names.forEach(element => {
        //     console.log(this.default+ element);            
        // });
    }
}

console.log(greeter.greet(['world', 'heaven']));
