let myMark = [23, 56, 7, 7];
for (const subj of myMark) {
  console.log(subj);
}

for (const char of "Paramasivam") {
  console.log(char);
}

const myArrayIterable = array => {
  let nextId = 0;
  return {
    next: () => {
      if (nextId < array.length) {
        return { value: array[nextId++], done: false };
      } else {
        return { done: true };
      }
    }
  };
};

let iterable = myArrayIterable(["aa", "bb"]);
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());

let iter = {
  0: "Helo",
  1: "World of",
  2: "Iterators",
  length: 3,
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        let value = this[index];
        let done = index >= this.length;
        index++;
        return { value, done };
      }
    };
  }
};

for (const i of iter) {
  console.log(i);
}

function* generatorFunc() {
  console.log("1");
  yield;
  console.log("2");
}

const genFun = generatorFunc();
console.log(genFun.next());
console.log(genFun.next());
console.log(genFun.next());
console.log("++++++++");

function* logger() {
  console.log("start");
  console.log(yield);
  console.log(yield);
  console.log(yield);
  return "end";
}

let genObj = logger();
console.log(genObj.next("start music"));
console.log(genObj.next("Save"));
console.log(genObj.next("Our"));
console.log(genObj.next("Souls"));

if (typeof genObj[Symbol.iterator] === "function") {
  console.log("it is iterable");
}

if(typeof genObj.next === 'function'){
    console.log("it is next method is there");
}

console.log(genObj[Symbol.iterator]());


function* logger(){
    yield 'a'
    yield 'b'
}

const ar = [...logger()];
const [x,y] = logger();
console.log(ar);
console.log(x, y);