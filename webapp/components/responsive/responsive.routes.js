(function() {
    'use strict';

    angular.module('responsive')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'responsive';
        var stateConfig = {
            url: '/responsive',
            templateUrl: 'components/responsive/responsive.html',
            title: gettext('responsive'),
        };

        routeHelper.registerState(stateName, stateConfig);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();