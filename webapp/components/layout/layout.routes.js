(function() {
    'use strict';

    angular.module('layout')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'layout';
        var stateConfig = {
            url: '/layout',
            templateUrl: 'components/layout/layout.html',
            title: gettext('layout'),
            controller: 'LayoutController'
        };

        routeHelper.registerState(stateName, stateConfig);
        routeHelper.setDefaultState('/layout');
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();