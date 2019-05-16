let myObject = {
  name: "param",
  age: 38,
  sex: "M"
};

const meta = {
    title:'Destrucring Assignment',
    authors:[
        {
            firstName:'paramasivam',
            lastName:'kaliyammorthi'
        }
    ],
    publisher:{
        name:'p4',
        url:'www.pa4.in'
    }
}

class MyObjectDestrcuring {

  demoNestedObjectDestructruing(){

    const {title: docTitle, authors:[{firstName:name}], publisher:{url:web}} = meta;
    console.log("----------------------------");
    console.log(docTitle);
    console.log(name);
    console.log(web);
    console.log("---------------------------");
  }

  demoObjectSameName() {
    let { name, age, sex } = myObject;
    console.log(name);
    console.log(age);
    console.log(sex);
  }

  demoDifferentName() {
    let { name:userName , age:userAge, sex:userSex } = myObject;
    console.log("====================================");
    console.log(userName);
    console.log(userAge);
    console.log(userSex);
    console.log("====================================");
  }


  demoSwapVariableWithArray(){

    let a = 23;
    let b = 45;
    [a,b] = [b,a];
    console.log("====================================");
    console.log(a);
    console.log(b);
    console.log("====================================");
  }

  demoDestructiongAssigmentinLoop(){

    let books =  Object.create ( {tile: 'JAva', pk:'JavaScript', sy:'oracle'});

     for(const {tile,pk,sy} of books){
         console.log('====================================');
         console.log(tile);
         console.log(pk);
         console.log(sy);
         console.log('====================================');
     }
  }
}

let objectDestr = new MyObjectDestrcuring();
objectDestr.demoObjectSameName();
objectDestr.demoDifferentName();
objectDestr.demoNestedObjectDestructruing();
objectDestr.demoSwapVariableWithArray();
// objectDestr.demoDestructiongAssigmentinLoop();
