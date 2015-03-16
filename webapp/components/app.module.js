(function() {
    'use strict';
    /**
     * app Module
     *
     * This is the entry point to the application
     */
    angular.module('r2m', [
    	'shared',
        
        'home',
    	'layout',
        'responsive',
        'typography',
        'gulp',
        'translation'
    	]);
})();