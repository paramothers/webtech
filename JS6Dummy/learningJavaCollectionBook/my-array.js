class MyArray{

    demoNewMethods(){

        let doubledArray = Array.from(arguments, (ele) => ele * 2);
        return doubledArray;
    }

    demoFindMethod(){

        let marks = [1,3,5,6];
        let result =  marks.find((element) => element > 9);
        console.log('first fround ',result);
    }

    demoFindIndexMethod(){

        let mark = [2,4,6,6,7];
        let index = mark.findIndex( (el) => el === 7);
        console.log('found index ', index);
    }

    demoKeysMethod(){
        let mark = [2,4,6,6,7];
        let iterat = mark.keys();

        let index = iterat.next();
        while(!index.done){
          
            console.log('index ', index.value);
            index = iterat.next();
        }
    }

    demoValuesMethod(){

        let valArray = [2,45,7,8,9];
        let iter = valArray.values();

        let index = iter.next();
        while(!index.done){

            console.log('value ', index.value);
            index = iter.next();
        }
    }

    demoFillMethod(){

        let myEmptyArray = new Array(8);
        myEmptyArray.fill(1,0,4);
        console.log(myEmptyArray);
        myEmptyArray.fill(90,4);
        console.log(myEmptyArray);
    }
}

let myArray = new MyArray();
let result = myArray.demoNewMethods(1,2,4,5,56);
for(const x of result){
   console.log(x);
}

myArray.demoFindMethod();
myArray.demoFindIndexMethod();
myArray.demoKeysMethod();
myArray.demoValuesMethod();
myArray.demoFillMethod();

