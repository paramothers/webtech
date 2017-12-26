const requestProcessor = require('../handlers/RequestProcessor');

const router = require('express').Router();

router.post('/save', (req, res) => {
  requestProcessor.postHandler(req, res);
});

router.put('/save', (req, res) => {

  requestProcessor.putHandler(req, res);
});

router.get('/html', (req, res) => {
  //      res.sendFile('./public/index.html');
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

router.get('/multiple', [requestProcessor.logRequest, requestProcessor.wrapup], (req, res) => {
  res.send('Bye');
});

router.route('/book')
  .get((req, res) => res.end('i am from get'))
  .post((req, res) => res.send('i am from post'))
  .put((req, res) => res.end('i ma from put'))


// router.all('/secrets', (req, res, next) => {

//   console.warn('Accessing secret method \n');
//   next();
// });

module.exports = router;