'use strict';

var gulp = require('gulp');
var config = require('./config')();
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

//
//
//
//

gulp.task('inject', ['styles'], function () {

  var injectStyles = gulp.src(config.css.files, { read: false });
  var injectScripts = gulp.src(config.js.files).pipe($.angularFilesort());
  var injectOptions = {
    ignorePath: [config.app, config.tmp + '/serve'],
    addRootSlash: false
  };


  var wiredepOptions = {
    bowerJson: config.bower.json,
    directory: config.bower.directory,
    cwd: 'app/serve',
    exclude: [/bootstrap-sass-official/, /bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
  };

  return gulp.src(config.app + '/*.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(config.tmp + '/serve'));
});
