(function() {
	'use strict';
	angular.module('r2m')
	.directive('progressBar', function(){
		// Runs during compile
		return {
			 scope: {
			 	progressValue: '=value',
			 	iconSrc: '@icon'
			 }, 
			 controller: function($scope, $element, $attrs, $transclude) {
			 },
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			 templateUrl: 'shared/directives/progress-bar/progressbar.template.html',
			 replace: true,
			 // link: function($scope, iElm, iAttrs, controller) {}
		};
	});
})();