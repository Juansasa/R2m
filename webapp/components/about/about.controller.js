(function() {
    'use strict';
    angular.module('about')
        .controller('AboutController', About);

    /*@ngInject*/
    function About($scope) {
        $scope.message = 'This is the about page';
    }

    $(document).ready(function() {
        if ($("#js-parallax-window").length) {
            parallax();
        }
    });

    $(window).scroll(function(e) {
        if ($("#js-parallax-window").length) {
            parallax();
        }
    });

    function parallax() {
        if ($("#js-parallax-window").length > 0) {
            var plxBackground = $("#js-parallax-background");
            var plxWindow = $("#js-parallax-window");

            var plxWindowTopToPageTop = $(plxWindow).offset().top;
            var windowTopToPageTop = $(window).scrollTop();
            var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

            var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
            var windowInnerHeight = window.innerHeight;
            var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
            var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
            var plxSpeed = 0.9;

            plxBackground.css('top', -(plxWindowTopToWindowTop * plxSpeed) + 'px');
        }
    }

})();