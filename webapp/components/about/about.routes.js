(function() {
    'use strict';

    angular.module('about')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'about';
        var stateConfig = {
            url: '/about',
            templateUrl: 'components/about/about.html',
            title: gettext('About'),
            controller: 'AboutController'
        };

        routeHelper.registerState(stateName, stateConfig);
        routeHelper.setDefaultState('/about');
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();