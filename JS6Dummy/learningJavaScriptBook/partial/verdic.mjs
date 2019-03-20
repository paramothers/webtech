function verdic(a, ...verd) {
  console.log(a);
  console.log(verd);
}

export const verdicDemo = () => {
  verdic(1, 35, 6, 6);
};

const addCurried = x => y => x + y;
const multipleCurry = x => y => x * y;
const add = (x,y) => x+y;

export const curriedDemo = () => {
  let fun = addCurried(4)(3);
  console.log(fun);
};

const genericTable = (x, y) => x * y;

console.log(multipleCurry(genericTable)(2));

const curry2 = fn => {
  if (typeof fn !== "function") throw Error("No functino provided");

  return function curriedFn(...args) {
    return fn.apply(null, args);
  };
};

export const demoCurriedMult = () =>{

  let result = curry2(add)(1,3);
  console.log(result);  
}

const compose = (a,b) => (c) => a(b(c));


