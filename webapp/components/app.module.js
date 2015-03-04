(function() {
    'use strict';
    /**
     * app Module
     *
     * This is the entry point to the application
     */
    angular.module('r2m', [
    		'gettext','ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'
    	])
        .run(['gettextCatalog',
            function(gettextCatalog) {
                gettextCatalog.currentLanguage = 'sv';
                //gettextCatalog.debug = true;
            }
        ]);
})();