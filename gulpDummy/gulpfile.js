var gulp = require('gulp');
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
// var myth = require('gulp-myth');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var static = require('serve-static');
var connect = require('connect');
var browserSync = require('browser-sync');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');

var cssFile = ['app/css/main.css', 'app/css/*.css']

gulp.task('clean', () =>{
    return del(['!dest/all.js','dist/*']);
});

gulp.task('watching', () => {

    gulp.watch('app/js/*.js', 'style2');
    gulp.watch('app/css/*.css', 'style2');
    gulp.watch('app/img.*','images');
});


gulp.task("images", () =>{

    return gulp.src('app/img/*')
                .pipe(imagemin())
                .pipe(gulp.pipe('dest/img'))

});

//process style sheet
gulp.task('styles', () =>{

    return gulp.src(cssFile)
    .pipe(concat('all.css'))
    //.pipe(myth())
    .pipe(gulp.dest('dest'));
    
});

//process style by sass
gulp.task('style2', () => {
    return gulp.src(cssFile)
    .pipe(sass()) // it include contationation as well
    .pipe(gulp.dest('dest'));
});


//process scripts
gulp.task('scripts', () => {
    return gulp.src('app/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dest'));
    
});

//process scripts
gulp.task('script2', () =>{

    return gulp.src('app/js/*.js')
            .pipe(sourcemaps.init())
            .pipe(jshint())            
            .pipe(jshint.reporter('default'))
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('dest/maps'))
            .pipe(gulp.dest('dest'))
});

//watch files
gulp.task('watch', () => {

    return gulp.series(
        gulp.watch('app/js/*.js', 'scripts'),
        gulp.watch('app/css/*.css', 'styles'),
        gulp.watch('app/css/*.css', 'styles')
    );   
    
});


//server task
gulp.task('server', () =>{

    return connect().use(static(__dirname))
    .listen(8000)
    .on('listening', () =>{
        console.log('server running at 8000');
    })
});

gulp.task('default', gulp.parallel('style2', 'script2'));