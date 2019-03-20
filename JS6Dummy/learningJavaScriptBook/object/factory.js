function factory(name){

    return {
        name: name
    };
}

let object1 = factory('padhu');
console.log(object1.name);
console.log(object1.constructor);


function factory2(){

    this.a = 1;
    return {
        b: 4
    };
}

let object2 = new factory2();
console.log(typeof object2.a);
console.log(object2.b);

let orinal = {
    howmany: 100
}

const nullify = (object) => {
    object.howmany = 0;
}

let copy = orinal;
copy.howmany = 200;
console.log(copy.howmany);
nullify(copy)
console.log(orinal.howmany);
