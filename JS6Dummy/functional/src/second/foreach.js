const forEach = (array, fun) => {

    for(let i=0; i< array.length; i++){
          fun(array[i]);
    }
}

const interateObject = (object, fun) => {

    for(var key in object){
        if(object.hasOwnProperty(key)){
            fun(key, object[key]);
        }
    }
} 

 const objectPrint = (key,value) => {console.log(`${key}-${value}`)}

const customFunction = (num) => {console.log(`value ${num}`)}

const temp = [1,23,4,5,5,2];

// forEach(temp, customFunction);

const userModel = {
    userName: 'Param',
    userAge: 12
}

interateObject(userModel, objectPrint);