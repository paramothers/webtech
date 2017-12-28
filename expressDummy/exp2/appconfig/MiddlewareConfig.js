const morgan = require('morgan');
const express = require('express');
const path = require('path');

const customeTraceMiddleware = require('../middleware/CustomTraceMiddleware');
const cusomeErrorMiddleware = require('../middleware/CustomeErrorMiddleware');

module.exports.configBuiltinMiddleware = function(app){
    
    //here /media is virtual path. it will be used in url
    app.use('/media',express.static('public'));
    
    //it is for logging http client requests
    app.use(morgan('dev'));    
};

module.exports.configCustomTraceMiddleware = function(app){
    
    app.use(customeTraceMiddleware.addRequestHistory);    
};

module.exports.configErrorMiddleware = function(app){

    app.use(cusomeErrorMiddleware.handleXHRerror);
    app.use(cusomeErrorMiddleware.handle500error);
    app.use(cusomeErrorMiddleware.handle404error);
}