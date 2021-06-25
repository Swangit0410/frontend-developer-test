var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var watch = require('gulp-watch');

var styleSRC = './src/dist/scss/App.scss';
var styleIndex = './src/dist/scss/index.scss';
var styleSidebar = './src/dist/scss/sidebar.scss';
var styleSearchbar = './src/dist/scss/searchbar.scss';
var styleDIST =  './src/';

gulp.task('style', function(){
    return watch( styleSRC, function () {
        gulp.src( styleSRC )
            .pipe( sass({
                errorLogToConsole: true,
                outputStyle: 'compressed'
            }) )
            .on( 'error', console.error.bind( console ) )
            .pipe( rename( { suffix: '.min' } ) )
            .pipe( gulp.dest( styleDIST ) );
    } );
    
});

gulp.task('style2', function(){
    return watch( styleIndex, function () {
        gulp.src( styleIndex )
            .pipe( sass({
                errorLogToConsole: true,
                outputStyle: 'compressed'
            }) )
            .on( 'error', console.error.bind( console ) )
            .pipe( rename( { suffix: '.min' } ) )
            .pipe( gulp.dest( styleDIST ) );
    } );
});

gulp.task('style3', function(){
    return watch( styleSidebar, function () {
        gulp.src( styleSidebar )
            .pipe( sass({
                errorLogToConsole: true,
                outputStyle: 'compressed'
            }) )
            .on( 'error', console.error.bind( console ) )
            .pipe( rename( { suffix: '.min' } ) )
            .pipe( gulp.dest( styleDIST ) );
    } );
});

gulp.task('style4', function(){
    return watch( styleSearchbar, function () {
        gulp.src( styleSearchbar )
            .pipe( sass({
                errorLogToConsole: true,
                outputStyle: 'compressed'
            }) )
            .on( 'error', console.error.bind( console ) )
            .pipe( rename( { suffix: '.min' } ) )
            .pipe( gulp.dest( styleDIST ) );
    } );
});

