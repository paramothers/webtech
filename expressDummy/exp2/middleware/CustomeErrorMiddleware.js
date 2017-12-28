const path = require('path');

module.exports.handleXHRerror = function(err, req, res, next) {
    console.error(err.stack);
    if (req.xhr) {
   // console.error(err.stack);
    res.status(500).send({ error: "JSON object not there" });
  } else {
    //next(err);
    //instead of having many methods
    res.status(403).end();
    res.status(400).send("Bad Request");
    res.status(404).sendFile(path.join(__dirname,"/public/images/tsunami.jpeg"));
  }
};

module.exports.handle500error = function(errr, req, res, next) {
  if (res.statusCode == 500) {
    console.error(errr.stack);
    res.send("Something internal Server!");
  } else {
    next(errr);
  }
};

module.exports.handle400error = function() {
  if (res.statusCode == 400) {
    console.error(err.stack);
    res.send("Bad Request !");
  } else {
    next(err);
  }
};
