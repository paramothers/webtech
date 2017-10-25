var gulp = require("gulp");
let browserify = require("browserify"); 
let babelify = require("babelify");
let source = require("vinyl-source-stream");


gulp.task('default',()=>{
    
    console.log('I am able to run gulp task');
    return browserify('./source/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('param.js'))
    .pipe(gulp.dest('./build/'));
});