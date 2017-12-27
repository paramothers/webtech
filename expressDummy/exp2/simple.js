const express =  require('express');
const app = express();

const square = require('./square');


app.get('/', (req,res)=>{
    console.log('request received');
    console.log('how to print current version express JS framework has used');
    res.send('Hai Param!');
});


app.listen(3000, ()=>{
   
   console.log('Server listen at 3000'); 
   console.log('square value of '+ square.area(4));
});