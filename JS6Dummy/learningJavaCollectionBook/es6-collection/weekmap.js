class MySimple {

    constructor(){

    }

    mapDemo(){

        const myMap = new Map();

        myMap.set('hobby','cycling');
        const foods = {

            dinner: 'curry',
            lunch: 'Sanwith',
            breakfast: 'kanchiee'
        }

        const emptyObject = {};

        myMap.set(emptyObject, foods);
        console.log(myMap.size);
        for( const [key, value] of myMap){
           console.log(`${key} - ${value}`);
        }
        console.log('----------------');
        myMap.forEach( (key, value) => {
            console.log(`${key} - ${value}`);
        }, myMap);
        console.log('===============');

        myMap.clear();
        console.log(myMap.size);
    }
}

const mySimple = new MySimple();
mySimple.mapDemo();