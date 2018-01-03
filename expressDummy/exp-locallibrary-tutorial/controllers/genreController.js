var Genre = require('../models/genre');
const Book = require("../models/book");
const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

const async = require('async');

// Display list of all Genre
exports.genre_list = function(req, res,next) {
    
    Genre.find()
         .sort([['name','ascending']])
         .exec((err, result)=>{
             
             if(err) return next(err);
             res.render('genre/genre_list',{title: 'Genre List', genreList: result});
         });
};

// Display detail page for a specific Genre
exports.genre_detail = function(req, res, next) {
    
  async.parallel({
      
      genre: function(callback){
          Genre.findById(req.params.id)
               .exec(callback);
      },
      genre_books: function(callback){
          Book.find({'genre':req.params.id})
              .exec(callback);
      }
      
  },function(err, result){
      if(err) return next(err);
      if(result.genre == null){
          
          let error = new Error('Genre Not Found');
          error.status = 404;
          return next(error);
      }
      res.render('genre/genre_detail',{title:'Genre Detail', genre: result.genre, genre_books:result.genre_books});
  });
};

// Display Genre create form on GET
exports.genre_create_get = function(req, res) {
    
    res.render('genre/genre_form',{title:'Create Genre'});
};

// Handle Genre create on POST
exports.genre_create_post = [
    
    body('name', 'Genre name is required').isLength({min:1}).trim(),
    
    sanitizeBody('name').trim().escape(),
    
    (req,res,next)=>{
        
        const errors = validationResult(req);
        const genre = new Genre({name:req.body.name});
        if(!errors.isEmpty()){
            res.render('genre/genre_form',{title:'Create Genre', genre:genre, errors:errors.array()});
            return;
            
        }else{
            
            Genre.findOne({'name':req.body.name})
                 .exec(function(err, result){
                     if(err) return next(err);
                     if(result){
                         res.redirect(result.url)
                     }else{
                         
                         genre.save(function(err){
                             if(err) return next(err);
                             res.redirect(genre.url);
                         });
                     }
                 })
        }
    }
    
];

// Display Genre delete form on GET
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};