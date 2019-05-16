class MyGenerator {

    isPrime(number){

        if(number < 2){
          return false;
        }else if(number === 2) {
              true;
        }

        for(let i = 3; i < number ; i++){
           if( number % i === 0){
              return false;
              break;
           }
        }
        return true;
    }

    validateNumbers(){

        let possibleArrays  = [73, 6, 90, 19, 15];
        let confirmedPrimes = [];

        for(const i of possibleArrays){
             if(this.isPrime(i)){
                confirmedPrimes.push(i);
             }
        }
        console.log('prime numbers ',confirmedPrimes);
    }
}


function* getNextPrimeNumber(){

    let nextNumber = 2;
    while(true){
     
        if(myGenerator.isPrime(nextNumber)){
                
            yield nextNumber;
        }
        nextNumber++;
    }
}

let myGenerator = new  MyGenerator();
myGenerator.validateNumbers();
console.log('====================================');
const nextPrime = getNextPrimeNumber();

console.log();
console.log(nextPrime.next().value);
console.log(nextPrime.next().value);
console.log(nextPrime.next().value);
console.log(nextPrime.next().value);
console.log(nextPrime.next().value);
console.log('====================================');
