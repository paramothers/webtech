let monkey  = {
    hair: true,
    feeds: 'banans',
    breathes: 'air'
}

function Human(name){

    this.name = name;
}
Human.prototype = monkey;
let param = new Human('Paramasivam');
console.log(monkey.isPrototypeOf(param));
console.log(Object.getPrototypeOf(param));

console.log('-----------');

let deer = {
    feeds: 'grace',
    breathes:'air'
}

function Animal() {

    let ab = 23;
}
Animal.prototype = deer;

let developer = new Animal();
developer.feeds = 'pizza';
developer.hacks = 'JavaScript';

console.log(developer.hacks);
console.log(developer.feeds);
console.log(developer.breathes);
console.log(developer.mywife);
console.log(developer.__proto__);
console.log(developer.constructor.prototype);

