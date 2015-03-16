(function() {
    'use strict';

    angular.module('translation')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'translation';
        var stateConfig = {
            url: '/translation',
            templateUrl: 'components/translation/translation.html',
            title: gettext('translation'),
            controller: 'TranslationController'
        };

        routeHelper.registerState(stateName, stateConfig);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();