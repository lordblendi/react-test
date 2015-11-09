var gulp = require('gulp');
var drakov = require('drakov');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

gulp.task('scripts', function () {
    gulp.src('./js/**/*.js')
        .pipe(concat('index.js'))
        .pipe(react())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    gulp.src('./html/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(concat('index.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('drakov-server', function () {

    var argv = {
        sourceFiles: './api-blueprint-test/*.md',
        serverPort: 3000
    };

    drakov.run(argv);

});

gulp.task('browserify', function () {
    gulp.start('scripts').start('html').start('css');
});


// build the main source into the min file
//gulp.task('jslint', function () {
//    return gulp.src('/js/*.js')
//        .pipe(jslint({
//            reporter: function (evt) {
//                var msg = ' ' + evt.file;
//
//                if (evt.pass) {
//                    msg = '[PASS]' + msg;
//                } else {
//                    msg = '[FAIL]' + msg;
//                }
//
//                console.log(msg);
//            }
//        }));
//});

gulp.task('default', function () {
    //return gulp.start('drakov-server');
    return gulp.start('browserify');
});
