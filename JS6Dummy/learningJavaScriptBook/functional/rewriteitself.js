
function ab() {

    console.log('a');
    ab = function(){
        console.log('b');
    }
}

// ab();
// ab();

let a = (function(){

    function someSetup(){
        console.log('setup done');        
    }

    function actualWork(){
        console.log('doing actual work');        
    }
    someSetup();
    return actualWork;
}())

// a();

let globalScope = 7;
const outer = () => {
    let outerScope = 2;

    let innerScope = () => {
     let resstult = globalScope + outerScope + 3;
     console.log(resstult);        
    }

    innerScope();
}

// outer();

const fn = () => {

    let funArray = [];
    for(var i = 0; i < 4 ; i++){

        funArray[i] = () => { return i;}
    }

    return funArray;
}

let arr = fn();
console.log(`length of array ${arr.length}`);

for(let fnn = 0; fnn < 4 ;fnn++){

     console.log(arr[fnn]());
}
