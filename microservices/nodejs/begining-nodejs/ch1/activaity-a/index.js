const {sum, add}  = require('./math');
const fs = require('fs');


console.log(add(2,4));
console.log(sum(2,4,5,6,7,8));

const fileTemp = `${__dirname}/simple.txt`;


fs.readFile(fileTemp, 'utf8', (err, data) => {

    if(err){
        throw err;
    }else{
        console.log(data);       
    }
});

const mydata = require('./mydata');

console.log('====================================');
console.log(mydata.name);
console.log(mydata.age);
console.log(mydata.name);
console.log('====================================');