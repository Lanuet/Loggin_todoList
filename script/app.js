/**
 * Created by lannt on 11/1/2016.
 */
'use strict';

var mainApp = angular.module("loginApp", ['ngRoute', 'ngCookies']);
mainApp.config(['$routeProvider', function ($routeProvider, $cookieStore) {
    $routeProvider
        .when('/', {
                templateUrl: 'Authorization/views/login.html',
                controller: 'LoginController'
            }
        )
        .when('/home', {
            templateUrl: 'Authorization/views/Home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

