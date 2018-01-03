var Author = require('../models/author');

const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} =  require('express-validator/filter');
const Book = require("../models/book");

const async = require("async");

// Display list of all Authors
exports.author_list = function(req, res,next) {
    
    Author.find()
          .sort([['family_name','ascending']])
          .exec((err, result)=>{
              if(err){
                  return next(err);
              }
              
              res.render('author_list',{title:'Author List', author_list: result});
          });
};

// Display detail page for a specific Author
exports.author_detail = function(req, res,next) {
   
   async.parallel({
       author: function(callback){
           
           Author.findById(req.params.id)
                 .exec(callback);
                 
       },
       author_books : function(callback){
           
           Book.find({'author':req.params.id},'title summay')
               .exec(callback);
       }
       
   },function(err,result){
       
       if(err) return next(err);
       if(result.author == null){
           
           let error = new Error('Author not found');
           error.status = 404;
           return next(error);
       }
       res.render('author_detail',{title: 'Author Detail', author: result.author, author_books:result.author_books});
   });
};

// Display Author create form on GET
exports.author_create_get = function(req, res) {
   
   res.render('author_form',{title:'Create Author'});
};

// Handle Author create on POST
exports.author_create_post = [
    
    body('first_name').isLength({min:1}).trim().withMessage('First name name must be specified').isAlphanumeric().withMessage('First name has non alphanumeric charactors'),
    body('family_name').isLength({min:1}).trim().withMessage('Family name must be specified').isAlphanumeric().withMessage('Family  nanme has non alphanumeric charactors'),
    body('date_of_birth', 'Invalid date of birth').optional({checkFalsy:true}).isISO8601(),
    body('date_of_death','Invalid of date of death').optional({checkFalsy: true}).isISO8601(),
    
    //sanitize fields
    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    sanitizeBody('date_of_birth').toDate(),
    sanitizeBody('date_of_death').toDate(),
    
    (req,res,next) =>{
        
        let errors = validationResult(req);
        let author = new Author({
            
            first_name: req.body.first_name,
            family_name:req.body.family_name,
            date_of_birth:req.body.date_of_birth,
            date_of_death:req.body.date_of_death
        });
        
        if(!errors.isEmpty()){
            
            res.render('author_form',{title: 'Create Authoer', author:author, errors:errors.array()});
            return;
        }else{
            
            author.save(function(err){
                if(err) return next(err);
                res.redirect(author.url);
            });
        }
    }
    ];

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