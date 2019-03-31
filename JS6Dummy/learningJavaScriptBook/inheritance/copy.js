function Papa() {}
function Wee() {}

Papa.prototype.name = "Bear";
Papa.prototype.owns = ["porridage", "chair", "bed"];

function extend2(child, parent) {
  let p = parent.prototype;
  let c = child.prototype;

  for (const i in p) {
    c[i] = p[i];
  }

  c.uber = p;
}

extend2(Wee, Papa);

console.log(Wee.prototype.hasOwnProperty("name"));
console.log(Wee.prototype.hasOwnProperty("owns"));

Wee.prototype.owns.pop();

console.log(Papa.prototype.owns);

let person = {
  name: "param",
  age: 38
};

console.log(person.constructor);
console.log(person.constructor.prototype);
console.log(typeof person);

function extendCopy(p) {
  let copy = {};

  for (const pro in p) {
    copy[pro] = p[pro];
  }
  copy.uber = p;
}

function deepCopy(p, c) {
  c = c || {};
  for (const i in p) {
    if (p.hasOwnProperty(i)) {
      if (typeof p[i] === "object") {
        c[i] = Array.isArray(p[i]) ? [] : {};
        deepCopy(p[i], c[i]);
      } else {
        c[i] = p[i];
      }
    }
  }

  return c;
}

let parent = {

    numbers: [1,2,3,4],
    letters: ['a','b'],
    obj: {
        porp: 1
    },
    bool: true
};

let myDeep = deepCopy(parent);
let myshallow = extendCopy(parent);
myDeep.numbers.push(98,88,77);

console.log(myDeep.numbers);

function object(o) {

    function F() {}
    F.prototype = o;
    let n = new F();
    n.uber = o;
    return n;
}

