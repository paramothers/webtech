const router = require('express').Router();

router.get('/users/:userID/books/:bookid', (req, res) => {

  res.send(req.params);
});

router.get('/flights/:from-:to', (req, res) => {
  res.send(req.params);
});

router.get('/user/:id', (req, res, next) => {

  console.log('the orignal URL ' + req.originalUrl);

  if (req.params.id === '0') next('route');
  else {
    next();
  }
}, (req, res, next) => {

  console.log(' parem id ' + req.params.id);
  res.send('method ' + req.method);
  res.end('Completed !!!');
});

module.exports = router