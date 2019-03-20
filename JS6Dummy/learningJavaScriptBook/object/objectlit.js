let hero = {
    name: 'param',
    age:38
}

let dog = {
    name2: 'MyDog',
    walk : () => {
        console.log('dog is walking', this.name2);        
    }
}

// console.log(dog.age);
// dog.age = 23;
// console.log(dog.age);
// delete dog.age;
// console.log(dog.age);
dog.walk();
