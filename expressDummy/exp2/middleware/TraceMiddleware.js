module.exports.trace = function(req, res, next){
    console.log("New request has received at "+Date.now()+" the url "+req.originalUrl);
    next();
}