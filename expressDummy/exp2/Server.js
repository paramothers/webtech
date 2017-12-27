const express =  require('express');


const square = require('./misc/square');
const middlewareConfig = require('./expressconfig/MiddlewareConfig');
const routerConfig = require('./expressconfig/RouterConfig');
const traceMiddleware = require('./middleware/TraceMiddleware');

const app = express();

middlewareConfig.config(app);
routerConfig.config(app);
app.use(traceMiddleware.trace);
// app.get('/', (req,res)=>{
//     console.log('request received');
//     console.log('how to print current version express JS framework has used');
//     // res.send('Hai Param!');
//     res.json({
//         "name":'paramasivam',
//         "age":22,
//         "date": Date.now()
//     });
// });


app.listen(3000, ()=>{
   
   console.log('Server listen at 3000'); 
   console.log('square value of '+ square.area(4));
});