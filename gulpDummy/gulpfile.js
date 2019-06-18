var gulp = require('gulp');
let concat = require('gulp-concat'); 
let uglify = require('gulp-uglify');
let myth = require('gulp-myth');

gulp.task('first', () => {

    console.log(' Welcome param !!');
    return;
});

gulp.task("second", () =>{

});

//process style sheet
gulp.task('styles', () =>{

    return gulp.src('app/css/*.css')
    .pipe(concat('all.css'))
    .pipe(myth())
    .pipe(gulp.dest('/dest'));
    
});


//process scripts
gulp.task('scripts', () => {
    return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('/dest'));
    
});

//watch files
gulp.task('watch', () => {

    return gulp.series(
        gulp.watch('js/*.js', 'scripts'),
        gulp.watch('css/*.css', 'styles')
    );   
    
});

gulp.task('default', gulp.parallel('styles', 'scripts'));