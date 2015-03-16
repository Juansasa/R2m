(function() {
    'use strict';

    var sharedModule = angular.module('shared');
    sharedModule.config(configure);

    /*@ngInject*/
    configure.$inject = ['$logProvider', 'customExceptionHandlerProvider', 'routehelperConfigProvider', 'gettext', '$urlRouterProvider', '$stateProvider'];
    function configure($logProvider, customExceptionHandlerProvider, routehelperConfigProvider, gettext, $urlRouterProvider, $stateProvider) {
        sharedModule.value('config', config);
        var config = {
            appErrorPrefix: '[R2m Error]: ',
            appTitle: gettext('My resume'),
            version: gettext('v0.0.1')
        };

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        // Configure the common route provider
        routehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
        routehelperConfigProvider.config.$stateProvider = $stateProvider;
        routehelperConfigProvider.config.docTitle = gettext('Resume');

        // Configure the common exception handler
        customExceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();