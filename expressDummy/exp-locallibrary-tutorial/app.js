var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
const helmet = require('helmet');
const pug = require('pug');

var index = require('./routes/index');
var users = require('./routes/users');
const catelog = require('./routes/catelog');

var app = express();
console.log("Open Mongo DB connection");
//connect to MongoDB in mlab
var mongoose = require('mongoose');
var mongoDB = 'mongodb://paramothers2:Penn1234@ds141796.mlab.com:41796/employee';
mongoose.connect(mongoDB, {
  // useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', ()=>{
  console.log('connection with DB obtained');
})

console.log("DB Connection obtained, register templates pug");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

console.log("Register templates engine, configure 3rd party middleare");
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(helmet()); // secure app from set of HTTP headersls

app.use(compression()); // compress the response.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


console.log("Configured 3rd party middleare, configure routers ");

app.use('/', index);
app.use('/users', users);
app.use('/catalog', catelog);

console.log("Configure routers, configure default error and 404 middleware ");
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("Express app configuration has completed !");
module.exports = app;
