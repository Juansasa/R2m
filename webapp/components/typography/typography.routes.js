(function() {
    'use strict';

    angular.module('typography')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'typography';
        var stateConfig = {
            url: '/typography',
            templateUrl: 'components/typography/typography.html',
            title: gettext('typography'),
        };

        routeHelper.registerState(stateName, stateConfig);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();