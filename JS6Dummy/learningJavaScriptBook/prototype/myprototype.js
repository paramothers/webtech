let as = {

}

console.log(as.prototype);
console.log(as.__proto__);

function  foo(a, b) {
  return a * b;
}

console.log(foo.length);
console.log(foo.constructor);
console.log(foo.prototype);

function Gadget(name, color){

    this.name = name;
    this.color = color;
    this. whatAreYou = () => {
        return 'I am a ' + this.color +' and i am '+this.name;
    }
}

let labtop = new Gadget('HP', 'Tablet');

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() {
    return 'Rating: ' + this.rating + ', price: ' + this.price;
}
let mobile = new Gadget('zony', 'w8opp');
console.log('===============');
for(const prop in labtop){
 console.log(prop + ' = '+labtop[prop]);
}
console.log('===============');

console.log(">>== ",labtop.__proto__);;
console.log(">>== ",labtop.constructor.prototype);;


console.log('===============');
for(const prop in labtop){
    if(labtop.hasOwnProperty(prop)){

        console.log(prop + ' = '+labtop[prop]);
    }
}

console.log(">> ",labtop.propertyIsEnumerable('constructor'));;
console.log(">> ",labtop.propertyIsEnumerable('price'));;
console.log(">> ",labtop.propertyIsEnumerable('constructor'));;
console.log('===============');
console.log(mobile.getInfo());
console.log(mobile.whatAreYou());

console.log(labtop.getInfo());
console.log(labtop.whatAreYou());

console.log(labtop.constructor);
console.log('-------------');
console.log(labtop.constructor.prototype);
console.log('-------------');
console.log(labtop.prototype);

function Hero(name) {
    this.name = name;
}

Hero.prototype.name = 'Ramarajan';

let oldHero = new Hero('sivaji');

console.log(oldHero.name);
console.log(oldHero.constructor.prototype.name);

console.log(oldHero.hasOwnProperty('name'));

delete oldHero.name;
console.log(oldHero.name);
console.log(oldHero.hasOwnProperty('name'));

let param = {
    productId: 99,
    section: 'products'
};
let url = "www.yahoo.com";

let query = [];
for (const attri of param){
    query.push(attri +' = '+param[attri]);
}

url += query.join('&')


