class MySet {

    setDemo(){

        const planetSet = new Set();
        planetSet.add('Param');

        planetSet.add('Padhu').add('Pavalan');
        planetSet.add('Parithi');

        for(const mem of planetSet){
           console.log(mem);
        }

        console.log(planetSet.size);
        console.log(planetSet.has('Padhu'));

        console.log('deleted ....',planetSet.delete('Parithi'));
        console.log('size ', planetSet.size);
    }
}

let mySet = new MySet();
mySet.setDemo();