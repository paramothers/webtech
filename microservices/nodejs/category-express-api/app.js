var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let url = require('url');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let catalogRouter = require('./routes/catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);



app.get('/hello/:name', (request, response) =>{

  let getParams = url.parse(request.url, true).query;

  if(Object.keys(getParams).length === 0){
    response.end('Hello from hello router - parameter  no parameter'+ request.params.name);
  }else{
    response.end('Hello '+ getParams.age);
  }
  
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

app.listen(9000, () => { console.log('running at 9000');})
