function sayhai(name){

    return 'Hai '+ name;
}

function aopProgramming(wrapped){

    return function(){
        console.log('Hello');
        const aop = wrapped.apply(this, arguments);
        console.log('Thank you');
        return aop;

    }
}

let weaved = aopProgramming(sayhai);
console.log(weaved('param'));


