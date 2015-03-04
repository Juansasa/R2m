(function() {
	'use strict';
	angular.module('about')
	.controller('AboutController', About);

	/*@ngInject*/
	function About($scope) {
		$scope.message = 'This is the about page';
	}
})();