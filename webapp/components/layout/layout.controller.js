(function() {
	'use strict';
	angular.module('layout')
	.controller('LayoutController', ['$scope', 'gettext', function($scope, gettext){
		$scope.test = gettext('test');
	}]);
})();