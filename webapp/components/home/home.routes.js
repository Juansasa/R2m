(function() {
    'use strict';

    angular.module('home')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'home';
        var stateConfig = {
            url: '/home',
            templateUrl: 'components/home/home.html',
            title: gettext('home'),
            controller: 'HomeController'
        };

        routeHelper.registerState(stateName, stateConfig);
        routeHelper.setDefaultState('/home');
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();