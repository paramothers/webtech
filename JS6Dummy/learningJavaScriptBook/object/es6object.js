let a = 1;
let b = 2;
let valObject = {a:a, b:b}

let secondObject = {a,b}

console.log(valObject);
console.log(secondObject);

let objType = "Vechile";

let object3 = {
    ["get"+objType]() {

        return "Ford";
    }
}

console.log(object3.getVechile());
