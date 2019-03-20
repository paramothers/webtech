const myEvery = (myArray, targetFunction) => {
  let consoliteatedResult = true;

  myArray.forEach(element => {
    consoliteatedResult = consoliteatedResult && targetFunction(element);
  });

  return consoliteatedResult;
};

const isAdult = age => age > 18;

export const callMyEveryFunction = () => {

  const age = [23, 17, 67, 87, 67];
  let areAllAdult = myEvery(age, isAdult);
  console.log('Are all adult ',areAllAdult);
};
