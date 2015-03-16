(function() {
    'use strict';

    angular.module('gulp')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'gulp';
        var stateConfig = {
            url: '/gulp',
            templateUrl: 'components/gulp/gulp.html',
            title: gettext('gulp'),
        };

        routeHelper.registerState(stateName, stateConfig);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();