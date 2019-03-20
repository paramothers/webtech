var scope = "outer socope";
function myFunction(whatis = scope, ...restParameters) {
  var scope = "inner scope";
  console.log(whatis);
  console.log(Array.isArray(arguments));
  console.log(Array.isArray(restParameters));
}

function sumAll(a, b, c) {
  return a + b + c;
}

// myFunction("hai", 1,3,5,5);

// console.log(sumAll(...[1,3,5]));
// console.log(sumAll.apply(null,[1,3,5]));

var a = 123;

function aa() {
  console.log(a);
  var a = 20;
  console.log(a);
}

// aa();

const swap = (a, b) => {
  if (a > 0 && b > 0) {
    let temp = a;
    a = b;
    b = temp;
  }

  // console.log(temp);
  return [a, b];
};

const swap2 = function(a, b) {
  if (a > 0 && b > 0) {
    let temp = a;
    a = b;
    b = temp;
  }

  // console.log(temp);
  return [a, b];
};

const invokeAdd = (a, b) => {
  return a() + b();
};



(
    function () {
        let result = invokeAdd( ()=> 1, () => 2);
        console.log(result);
    }
)();

let res = function () {
    console.log('----');    
    return invokeAdd( ()=> 1, () => 2);
}()

const outerFunction = (number) => {

    const square = (seed) => { return seed * 2}
    return square(number);
}



console.log(outerFunction(6));
