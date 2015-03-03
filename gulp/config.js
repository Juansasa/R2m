'use strict';

module.exports = function() {
    var appPath = 'webapp';
    var tmp = '.tmp';
    var dist = 'dist';
    var assets = appPath + '/assets';
    var components = appPath + '/components';
    var bowerDir = './bower_components';

    var config = {
        app: appPath,
        tmp: tmp,
        dist: dist,

        bower: {
            json: require('./../bower.json'),
            directory: bowerDir
        },

        scss: {
            main: assets + '/sass/index.scss',
            partials: [
                // Files order: config -> variables -> the rest
                assets + '/sass/configs/**/_*.scss',
                assets + '/sass/mixins/**/_*.scss',
                appPath + '/**/_*.scss',
            ],
            dest: tmp + '/serve/app/'
        },

        css: {
            files: [
                assets + '/css/**/*.css',
                components + '/**/*.css',
                tmp + '/**/*.css'
            ]
        },

        js: {
            files: [
                // Change order of files if necessary
                appPath + '/**/*.js',
                appPath + '/**/*.constant.js',
                appPath + '/**/*.service.js',
                appPath + '/**/*.controller.js',
                appPath + '/**/*.js',
                '!' + appPath + '/**/*.mock.js',
                '!' + appPath + '/**/*.spec.js',
            ]
        }
    };

    return config;
};