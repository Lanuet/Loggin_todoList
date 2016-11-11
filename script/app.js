/**
 * Created by lannt on 11/1/2016.
 */
'use strict';

var mainApp = angular.module("loginApp", ['ngRoute', 'ngCookies']);
mainApp.config(['$routeProvider', function ($routeProvider, $cookieStore) {
    $routeProvider
        .when('/', {
                templateUrl: 'Login/login.html',
                controller: 'LoginController'
            }
        )
        .when('/home', {
            templateUrl: 'todoList/Home.html',
            controller: 'HomeController'
        })
        .when('/register', {
            templateUrl: 'Register/register.html',
            controller: 'RegisterController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

