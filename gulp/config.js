'use strict';

module.exports = function() {
    var appPath = 'webapp';
    var tmp = '.tmp';
    var dist = 'dist';
    var assets = appPath + '/assets';
    var bowerDir = './bower_components';
    var serveDir = tmp + '/serve';

    var config = {
        app: appPath,
        tmp: tmp,
        serve: serveDir,
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
            dest: serveDir + '/app'
        },

        css: {
            files: [
                appPath + '/**/*.css',
                tmp + '/**/*.css'
            ]
        },

        js: {
            files: [
                // ordering of modules is handled by angular-filesort plugin
                appPath + '/**/*.js',
                appPath + '/**/*.constant.js',
                appPath + '/**/*.service.js',
                appPath + '/**/*.controller.js',
                appPath + '/**/*.js',
                '!' + appPath + '/**/*.mock.js',
                '!' + appPath + '/**/*.spec.js',
            ]
        },

        images: {
            files: [assets + '/images/**'],
            dest: dist + '/assets/images'
        },

        fonts: {
            files: [assets + '/fonts/**', bowerDir + '/**'],
            dest: dist + '/fonts/'
        },

        misc: {
            files: [appPath + '/*.{ico,txt}', appPath + '/.htaccess']
        },

        templatecache: {
            files: [
                appPath + '/**/*.html',
                tmp + '/**/*.html'
            ],
            dest: tmp + '/partials',
            moduleName: 'app'
        },

        wiredepOptions: getWiredepOptions
    };


    function getWiredepOptions() {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            exclude: [/bootstrap-sass-official/, /bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
        };
    }

    return config;
};