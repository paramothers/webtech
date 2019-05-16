var Person = (function(){

    var privateData = new WeakMap();

    function Person(name){

        privateData.set(this, {name:name});
    }

    Person.prototype.getName = function(){

        return privateData.get(this).name;
    }

    return Person;
}());

let p1 = new Person('Param');

console.log(p1.getName());

