(function() {
	'use strict';
	angular.module('home')
	.controller('HomeController', Home);

	/*@ngInject*/
	function Home($scope) {
		$scope.welcome = 'Welcome home';
	}
})();