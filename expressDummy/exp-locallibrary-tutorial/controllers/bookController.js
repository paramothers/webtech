var Book = require('../models/book');
const BookInstance = require('../models/bookinstance');
const Author = require('../models/author');
const Genre = require('../models/genre');

const async = require('async');

const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');


exports.index = function(req, res) {
    
    async.parallel({
        
        book_count : function(callback){
            Book.count(callback);
        },
        book_instance_count: function(callback){
            BookInstance.count(callback);
        },
        author_count: function(callback){
            Author.count(callback);
        },
        genre_count: function(callback){
            Genre.count(callback);
        }
    },
    function(err, result){
        
        res.render('index',{title:'Library Home page', error: err, data:result});
    });
    
};

// Display list of all books
exports.book_list = function(req, res,next) {
    
    Book.find({},' title author')
        .populate('author')
        .exec(function(err, book_lists){
            
            if(err){
                return next(err);
            }else{
                res.render('book/book_list',{title: 'Book List', book_list: book_lists});
            }
        });
};

// Display detail page for a specific book
exports.book_detail = function(req, res,next) {
   
   async.parallel({
       
       book:function(callback){
           Book.findById(req.params.id)
               .populate('author')
               .populate('genre')
               .exec(callback);
       },
                
       book_instances:function(callback){
           
           BookInstance.find({'book':req.params.id})
                       .exec(callback);
       }
   },
   function(err, result){
       if(err) return next(err);
       if(result.book == null){
           let error= new Error('Book not found');
           error.status = 404;
           return next(error);
       }
       res.render('book/book_detail',{title: 'Title', book: result.book, book_instances:result.book_instances});
   });
};

// Display book create form on GET
exports.book_create_get = function(req, res, next) {
    
    async.parallel({
        
        genres: function(callback){
            
            Genre.find(callback);
        },
        authors: function(callback){
            Author.find(callback);
        }
    },function(err, result){
        
        if(err) return next(err);
        res.render('book/book_form',{title: 'Create Book', authors:result.authors, genres:result.genres});
    });
    
};

// Handle book create on POST
exports.book_create_post = [
    
    (req,res,next) =>{
        
        if( !(req.body.genre instanceof Array)){
           
           if(typeof req.body.genre === 'undefined'){
               
               req.body.genre = [];
           }else{
               req.body.genre = new Array(req.body.genre);
               
               
           }                  
        }
        next();
    },
    
    //validation
    body('title', 'Title must not be empty').isLength({min:1}).trim(),
    body('author','Author must not be empty').isLength({min:1}).trim(),
    body('summary', 'Summary must not be empty').isLength({min:1}).trim(),
    body('isbn','ISBN mut nto be empty').isLength({min:1}).trim(),
    
    sanitizeBody('*').trim().escape(),
    
    (req,res,next) =>{
        
        const error = validationResult(req);
        const book = new Book({
            title: req.body.title,
            author:req.body.author,
            summary:req.body.summary,
            isbn:req.body.isbn,
            genre:req.body.genre
        });
        
        if(!error.isEmpty()){
            
            async.parallel({
                
                authors: function(callback){
                    Author.find(callback);
                },
                genres: function(callback){
                    Genre.find(callback);
                }
            },function(err,result){
                
                if(err) return next(err);
                
                for(let i =0; i< result.genres.length; i++){
                    if(book.genre.indexOf(result.genres[i]._id) > -1){
                        result.genres[i].checked='true';
                    }
                }
                res.render('book/book_form',{title:'Create Book', authors:result.authors, genres: result.genres,book:book,errors:error.array()});
            });
            return;
        }else{
            
            book.save(function(err){
                if(err) if(err) return next(err);
                res.redirect(book.url);
            });
        }
    }
];

// Display book delete form on GET
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};