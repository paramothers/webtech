const morgan = require('morgan');

module.exports.config = function(app){
    
    app.use(morgan('dev'));
};