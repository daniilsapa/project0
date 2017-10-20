"use strict";

module.exports = function (project0) {

    project0.config(['$locationProvider' ,'$routeProvider', '$httpProvider',
            function config($locationProvider, $routeProvider, $httpProvider) {

                //$httpProvider.interceptors.push('headerInjector');
                $locationProvider.hashPrefix('');

                $routeProvider
                    .when('/main', {
                        templateUrl: 'views/main-page.view.html'
                    })
                    .otherwise('/main');

            }
        ]);

};


