let id1 = Symbol();
let id2 = Symbol();

console.log('id1 ', id1);
console.log('id2 ', id2);

if(id1 === id2){
   console.log('both are same');
}else{
   console.log('both are not same');
}

class Application {

   constructor(mode){

      switch(mode){

         case Application.DEV:
           console.log("dev environment");
           break;
         case Application.PROD:
           console.log('prod environment');
      }
   }

   demoSymbol() {

      let user = {};
      let email = Symbol();
      user.name = 'param';
      user.age = 38;
      user[email] = 'param@ga.com';

      console.log(Object.keys(user));
      console.log(Object.getOwnPropertyNames(user));
      console.log(JSON.stringify(user));
      
      console.log(Object.getOwnPropertySymbols(user));
      console.log(Reflect.ownKeys(user));
   }

   specialOperator(){

      let names = ['param','padhu','pavalan','parithi'];

      let iterator = names[Symbol.iterator]();
      console.log(iterator.next().value);
      console.log(iterator.next().value);
      console.log(iterator.next().value);
      console.log(iterator.next().value);     
   }

   demoRegistory(){

      const debbie = Symbol.for('user');
      const second = Symbol.for('user');

      if(debbie === second){
         console.log('====================================');
         console.log('both are same key');
         console.log('====================================');
      }

      console.log(Symbol.keyFor(debbie));
   }

}

Application.DEV = Symbol();
Application.PROD = Symbol();

let app = new Application(Application.DEV);
app = new Application(Application.PROD);

let application = new Application();
application.demoSymbol();
application.specialOperator();
application.demoRegistory();

