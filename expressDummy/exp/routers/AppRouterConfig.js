const path = require('path');
const express = require('express');


const employeeRouter = require('./EmployeeRouter');
const errorRouter = require('./ErrorRouter');
const parameterRouter = require('./ParameterRouter');
const miscRouter = require('./MiscRouter');
const bodyParser = require('body-parser');

module.exports.configure = function(app) {

  app.use((req,res,next)=>{
    
    console.log('a request reached ', Date.now());
    next();
  });
  
  app.use('/static', express.static(path.join(__dirname, 'public')));
  app.use('/employee', employeeRouter);

  app.get('/', (req, res) => res.send('Hello World Param!'))

  app.use(parameterRouter);
  app.use(miscRouter);
  
  //body parser configuration
  app.use(bodyParser.urlencoded({
    extended:true
  }));
  app.use(bodyParser.json());
  //put at last
  app.use(errorRouter);
  
  console.log('myRouterConfig module has completed');
}