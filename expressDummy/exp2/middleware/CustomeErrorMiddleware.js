const path = require("path");
const server = require('../Server');

module.exports.handleXHRerror = function(err, req, res, next) {
  console.log(err.stack);
  if (req.xhr) {
    // console.error(err.stack);
    res.status(500).send({ error: "JSON object not there" });
  } else {
    //next(err);
    //instead of having many methods
    res.status(403).end();
    res.status(400).send("Bad Request");
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

module.exports.handle404error = function(req, res, next) {
  // console.log(server.rootPath);
  // res.status(404).sendFile(path.join(__dirname,"/public/images/tsunami.jpeg"));
  res.status(404).sendFile(server.rootPath+"/public/images/tsunami.jpeg");
};
