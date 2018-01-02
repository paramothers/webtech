var Book = require('../models/book');
const BookInstance = require('../models/bookinstance');
const Author = require('../models/author');
const Genre = require('../models/genre');

const async = require('async');


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
                res.render('book_list',{title: 'Book List', book_list: book_lists});
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
       res.render('book_detail',{title: 'Title', book: result.book, book_instances:result.book_instances});
   });
};

// Display book create form on GET
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

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