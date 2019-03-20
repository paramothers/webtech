
function Hero(name){
    this.occupation = "farmer";
    this.userName = name;
    this.sayHello = () => {

        console.log(`Hi ${this.userName}`);
    }
}

var userAge = 23;
let hero2 = new Hero('padhu');
// console.log(hero2.occupation);
// console.log(Hero('dsfsf'));
let hero3 = new hero2.constructor('Pavalan');
hero3.sayHello();
console.log();
// hero2.sayHello();

let user = {};
console.log(hero2 instanceof Hero);
console.log(hero2 instanceof Object);
