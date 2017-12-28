const express =  require('express');

const square = require('./misc/square');
const middlewareConfig = require('./appconfig/MiddlewareConfig');
const routerConfig = require('./appconfig/RouterConfig');

const app = express();

middlewareConfig.configCustomTraceMiddleware(app);
middlewareConfig.configBuiltinMiddleware(app);
routerConfig.config(app);
middlewareConfig.configErrorMiddleware(app);




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

module.exports.rootPath = __dirname;