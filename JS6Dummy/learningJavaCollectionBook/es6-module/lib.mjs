const PI = 3.1415926;

function sum(...args) {
    console.log('sum ',args);
    return args.reduce((num,tot) => tot + num);
}

function multi(...args){
       console.log('args ',args);
}

export{ sum, multi, PI};