const express = require('express');
const router = express.Router();


router.use((req, res, next) => {

  res.status(404).send('\nSorry could not find resource \n');
});

router.use((err, req, res, next) => {

  console.error(err.stack);
  //res.status(500).send('\nSorry ! Something went wrong \n');
  next(err);
});

router.use((err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({
      "error": "Somthing went wrong"
    })
  } else {
    next(err);
  }
});

module.exports = router;