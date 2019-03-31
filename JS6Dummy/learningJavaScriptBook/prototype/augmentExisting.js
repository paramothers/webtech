Array.prototype.inArray = function(needle) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === needle) {
      return true;
    }
  }
  return false;
};

let colors = ['red','corw','blue'];
console.log(colors.inArray('red'));

String.prototype.reverse = function() {
    return Array.prototype.reverse.apply(this.split('')).join('');
}

function Dog(){
    this.tail =  true;
}

let benji = new Dog();
let rusty = new Dog();

Dog.prototype.say = function(){
    return 'Woof';
}

console.log(benji.say());
console.log(rusty.say());
console.log(rusty.constructor);
console.log(rusty.constructor);

Dog.prototype = {
    paws:5,
    hair:true
};

console.log(benji.say());
console.log(rusty.say());
console.log(rusty.constructor);
console.log(rusty.constructor);

let lucy = new Dog();
console.log(typeof lucy.__proto__.say);
console.log(typeof lucy.__proto__.paws);
console.log(lucy.constructor);