'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect');

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