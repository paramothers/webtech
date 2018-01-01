const Author = require('../models/author');

exports.authorList = function(req, res){
    res.send('Author List not yet implemented');
}

exports.authorDetail = function(req, res){
    
    res.send('Author detail is not implemented ');
}

exports.authorCreateGET = function(req,res){
    
    res.send('create author is not yet implmented ');
}

exports.authorCreatePOST = function(req, res){
    
    res.send(' create Author POST is not implemented');
}

// Display Author delete form on GET
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};