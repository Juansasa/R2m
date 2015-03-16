(function() {
	'use strict';
	angular.module('home')
	.controller('HomeController', Home);

	/*@ngInject*/
	function Home($scope, $uiViewScroll) {
		$scope.welcome = 'Welcome home';
		$uiViewScroll(angular.element(document.querySelector('.home')));
	}
})();