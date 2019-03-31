class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " generic noise ");
  }
}

class Cat extends Animal {
  speak() {
    console.log(this.name + " says meow");
  }
}

let c = new Cat("Grace");
c.speak();

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + " Roar... ");
  }
}

let lion = new Lion("Lenny");
lion.speak();

class Base {}
class Derive extends Base {
  constructor() {
    // this.name = name; //'this' is not allowed before super()
  }
}

let device = new Derive();
