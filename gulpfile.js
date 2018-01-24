'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
    babelify = require('babelify'),
    // babeles6 = require('babel-preset-es2015'),
    browserify = require('gulp-bro'),
    jquery = require('jquery');

gulp.task('css', function() { 
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('serve', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('scripts', function() {
return gulp.src('./scripts/app.js')
        .pipe(browserify({ transform: [ babelify.configure({ presets: ['es2015'] }) ] }))
        .pipe(gulp.dest('./public/js/'));
});