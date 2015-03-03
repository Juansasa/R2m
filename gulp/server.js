'use strict';

var gulp = require('gulp');
var config = require('./config')();
var util = require('util');
var browserSync = require('browser-sync');
var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;
    var routes = null;

    // Make sure bower_components is correctly routed
    if (baseDir === config.app || (util.isArray(baseDir) && baseDir.indexOf(config.app) !== -1)) {
        routes = {
            '/bower_components': 'bower_components'
        };
    }

    if (browserSync.active) {
            return;
        }
        var options = {
            port: 9000,
            startPath: '/',
            server: {
                baseDir: baseDir,
                //directory: true,
                middleware: middleware,
                routes: routes
            },
            files: [config.serve + '/**/*.{html,css,sass,js}'],
            watchOptions: {
                debounceDelay: 1000
            },
            ghostMode: {
                clicks: true,
                forms: true,
                scroll: true,
                location: false
            },
            injectChanges: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'gulp-patterns',
            notify: true,
            browser: browser
        };
        browserSync(options);
}

gulp.task('serve', ['watch'], function() {
    browserSyncInit([
        config.serve,
        config.app
    ], [
        config.serve + '/**/*.css',
        config.app + '/**/*.js',
        config.app + '/assets/images/**/*',
        config.tmp + '/serve/*.html',
        config.tmp + '/serve/**/*.html',
        config.app + '/**/*.html'
    ]);
});

gulp.task('serve:dist', ['build'], function() {
    browserSyncInit(config.dist);
});