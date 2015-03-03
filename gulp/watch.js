'use strict';

var gulp = require('gulp');
var config = require('./config')();

gulp.task('watch', ['inject'], function() {
    gulp.watch([
        config.app + '/**/*.html',
        config.app + '/**/*.scss',
        config.app + '/**/*.js',
        'bower.json'
    ], ['inject']);
});