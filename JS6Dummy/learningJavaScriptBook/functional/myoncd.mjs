const once = fn => {
  let done = false;
  return function() {
    return done ? undefined : ((done = true), fn.apply(this, arguments));
  };
};

const doPayment = once(() => console.log("payment is done"));

const factorial = n => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const myMemorize = fn => {
  const memTable = {};
  return arg => (memTable[arg] ? memTable[arg] : (memTable[arg] = fn(arg)));
};

const myMemoWrapper = myMemorize(n => {
  if (n === 0) return 1;
  return n * myMemoWrapper(n - 1);
});

export const demo = () => {
  myMemoWrapper(5);
  myMemoWrapper(15);
  myMemoWrapper(5);
};

export const onceDemo = () => {
  doPayment();
  doPayment();
};


export const myObjectAssign = () => {

    let a = {name: 'param'};
    let b = {age: 38};

    let person = Object.assign(a,b);
    
    console.log(person);

    console.log(Object.entries(person)[1]);
    
    
}
