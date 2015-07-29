'use strict';

/**
 * @ngdoc overview
 * @name wwkipApp
 * @description
 * # wwkipApp
 *
 * Main module of the application.
 */
angular
  .module('wwkipApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/print', {
        templateUrl: 'print.html',
        controller: 'MainCtrl',
        controllerAs: 'print'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
