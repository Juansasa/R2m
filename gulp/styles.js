'use strict';

var gulp = require('gulp');
var config = require('./config')();
var $ = require('gulp-load-plugins')();

//
// Import and compile SCSS files to CSS. The order of files is assumed to be
// configs -> variables -> the rest. 
//  Configs should contains configurations of external plugins
//  Variables should contains SASS global variables which must be load before everything else
// The order of files are specified in 'gulp/config.js' file.
//

var sassCompilerOptions = {
    style: 'expanded'
};

var partialFiles = gulp.src(config.scss.partials, {
    read: false
});

var injectOptions = {
    transform: function(filePath) {
    /* filePath = filePath.replace(config.app + '/app/', '');
        filePath = filePath.replace(config.app + '/components/', '../components/');*/
        return '@import \'' + filePath + '\';';
    },
    starttag: '// import',
    endtag: '// endimport',
    addRootSlash: false
};

gulp.task('styles', function() {
  return gulp.src(config.scss.main)
    .pipe($.inject(partialFiles, injectOptions))
    //.pipe(gulp.dest(config.scss.dest)) 
    .pipe($.sass(sassCompilerOptions))
  .pipe($.autoprefixer())
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(config.scss.dest));
});