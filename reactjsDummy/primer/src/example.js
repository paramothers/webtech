console.log("From Example module");

function myFunc(name, weather = "india") {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today.");
}

function muFung(name, weather, ...restParameters) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today.");
  for (let i = 0; i < restParameters.length; i++) {
    console.log("rest of argument ", restParameters[i]);
  }
}

let secondFunt = (name, weather, ...restParameters) => {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today.");
  for (let i = 0; i < restParameters.length; i++) {
    console.log("rest of argument ", restParameters[i]);
  }
};

secondFunt(1, 2, 4, 5, 5, 56, 8);

myFunc = fn => {
  console.log("this is called by myfunc" + fn() + (2).toString() + String(5));
};

myFunc(() => "Hai param");

let myarrat = [1, 24, 5, 5];
let secobn = [3, 46, 7, ...myarrat];

let a1, a2;
[a1, a2] = [...myarrat];

let myObj = new Object();
myObj.name = 'param';


myObj = {

    //by Fat arrow syntax
    temp: () => {
        console.log('====================================');
        console.log('sdfd');
        console.log('====================================');
    },

    //with 'function' keyword
    scond : function second(){
        console.log('====================================');
        console.log('sdfd');
        console.log('====================================');
    },

    //like java
    third(){
        console.log('haiii');
    },

    //this method defined in object litral
    fourth : () => ({
        name: 'oaram'
    })
}

class simple {
   
    constructor(){

    }

    // this method defined in class
    printMessage = () =>{


    }
}

let sim = new simple();
let des = {};
Object.assign(des,sim);

let thirdObject = {...sim, age:23}