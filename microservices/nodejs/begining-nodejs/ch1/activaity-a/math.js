function add(a, b) {
  return a + b;
}

function sum(...arg){

    return arg.reduce((a,b) => a+b );
}



module.exports = {
    add,
    sum
}