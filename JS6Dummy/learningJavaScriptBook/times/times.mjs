const line = (length, char) => {
  return times(length, () => { return char;}).join("");
};

const times = (length, fun) => {
  let result = new Array(length);
  for (let i = 0; i < length; i++) result.push(fun());
  return result;
};

export const myTimes = () => {
  console.log(line(10, "*"));

  console.log(Array.range(9));
  
};
const simpleFunction = (age = 21, sex) => { }
const secondFunction = (greeting, ...names) => {

    names.forEach( (name) => console.log(greeting+' '+name));
}

const printUserWithWinner = () => {

    let userName = ['aaa','bbb','ccc','ddd'];
    userName.map( (na, i) => (i < 3)? console.log(`${i+1} winner: ${na}`): console.log(`${na}`));
}

export const testRestParameter = () => {
    // secondFunction('Hi', 'param', 'padhu','pavalan','parithi');
    printUserWithWinner();

    
}


