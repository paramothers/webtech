class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  giveBirth() {
    return this.firstName;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, position) {
    super(firstName);
    this.lastName = lastName;
    this.position = postMessage;
  }

  startJob() {}
}

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  /* 
    get model(){
        return this.model;
    } */

  calculateCurrentValue() {
    return "899";
  }
}

let dezire = new Car("Suzuki", "2018");

console.log(typeof Car);
console.log(dezire.model);

const bike = class {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
};

class Loggser {
  static log(level, message) {
    console.log(`${level} : ${message}`);
  }
}

Loggser.log("ERROR", "The end of old syntaz");
let loggser = new Loggser();
// loggser.log("ERROR", "The end of old syntaz");

class iterableArg {
  constructor(...args) {
    this.args = args;
  }

  *[Symbol.iterator]() {
    for (const arg of this.args) {
      yield arg;
    }
  }
}

for (const x of new iterableArg("ES6", "generator")) {
  console.log(x);
}
