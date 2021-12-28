(function () {

    var app = angular.module("MyApp");

    app.directive('googleAdSense', function () {
        return {
            restrict: 'A',
            replace: true,       
            templateUrl: "/App/GoogleAdSense/googleAds.html",
            controller: function () {
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
        };
    });
}());
