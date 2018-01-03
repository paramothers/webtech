var BookInstance = require('../models/bookinstance');
const Book = require("../models/book");
const {body, validationResult} = require("express-validator/check");
const {sanitizeBody} = require('express-validator/filter');

// Display list of all BookInstances
exports.bookinstance_list = function(req, res, next) {
    
    BookInstance.find()
                .populate('book')
                .exec((err, list_bookinstances)=>{
                    if(err){
                        return next(err);
                    }else{
                       res.render('bookinstance/bookinstance_list',{ title: 'Book Instance list', bookinstance_list: list_bookinstances }); 
                    }
                });
};

// Display detail page for a specific BookInstance
exports.bookinstance_detail = function(req, res, next) {
    
    BookInstance.findById(req.params.id)
                .populate('book')
                .exec(function(err, result){
                    
                    if(err) return next(err);
                    if(result == null){
                        
                        let error = new Error('BookInstance is not found');
                        error.status = 404;
                        return next(error);
                    }
                    
                    res.render('bookinstance/bookinstance_detail', {title: 'Book', bookinstance:result});
                })
};

// Display BookInstance create form on GET
exports.bookinstance_create_get = function(req, res, next) {
    
    Book.find({},'title')
        .exec(function(err, result){
            if(err) return next(err);
            res.render('bookinstance/bookinstance_form',{title:'Book Instance create', book_list:result});
        });
};

// Handle BookInstance create on POST
exports.bookinstance_create_post = [
    
    body('book','Book must be specified').isLength({min:1}).trim(),
    body('imprint','Imprint  must be specified').isLength({min:1}).trim(),
    body('due_back','Invalid date').optional({checkFalsy:true}).isISO8601(),
    
    sanitizeBody('book').trim().escape(),
    sanitizeBody('imprint').trim().escape(),
    sanitizeBody('status').trim().escape(),
    sanitizeBody('due_back').toDate(),
    
    (req,res,next) =>{
        
        const validationErrors = validationResult(req);
        const bookInstance = new BookInstance({
            
            book:req.body.book,
            imprint:req.body.imprint,
            status:req.body.status,
            due_back:req.body.due_back
        });
        
        if(!validationErrors.isEmpty()){
            
            Book.find({},'title')
                .exec(function(err, books){
                    if(err) return next(err);
                    res.render('bookinstance/bookinstance_form',{title: 'Instance Create', book_list:books, errors:validationErrors.array(),selected_book:bookInstance.book._id,bookInstance:bookInstance});
                });
                return;
        }else{
            
            bookInstance.save(function(err){
                 if(err) return next(err);
                 res.redirect(bookInstance.url);
                 
            });
        }
    }
    
    ];
// Display BookInstance delete form on GET
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST
exports.bookinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};