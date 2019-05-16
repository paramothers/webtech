class MyNumber {

    demoNumber(){

        console.log(Number.isInteger(12));
        console.log(Number.isInteger(12.5));
        console.log(Number.isInteger([12.5]));

        console.log(Number.isNaN(NaN));

        console.log('====================================');
        console.log(Number.isFinite(10));
        console.log(Number.isFinite(null));
        console.log(Number.isFinite(undefined));
        console.log(Number.isFinite([]));
        console.log('====================================');

        console.log('====================================');
        console.log(Number.isSafeInteger('19'));
        console.log(Number.isSafeInteger(5));
        console.log('====================================');
    }
}

let myNumber = new MyNumber();
myNumber.demoNumber();