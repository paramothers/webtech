const express = require('express');
const employeeRouter = require("../routers/EmployeeRouter")

module.exports.config = function(app){
    
    app.use('/employee',employeeRouter);
}