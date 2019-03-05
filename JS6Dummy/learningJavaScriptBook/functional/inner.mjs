let global = "Global";
export function outerFunction(userNAme) {
  const outerVa = "I am from outer function";
  function innerFunction() {
    let i = 5;
    console.log(i);
    console.log(global);
    console.log(outerVa);
    console.log(userNAme);
  }

  innerFunction();
}

export function secondFunction(yourName) {
  console.log("from secons function ", yourName);
}

export function closureDemo(arg) {
  let outerVariable = "Outer Param";

  return () => {
    console.log(outerVariable);
    console.log(arg);
  };
}
