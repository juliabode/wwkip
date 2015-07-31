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
    'ngRoute',
    'pascalprecht.translate'
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
        controller: 'PrintCtrl',
        controllerAs: 'print'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('English', {
        'description' : 'Join us as we knit with hundreds of other knitters around the world on the same day!',
        'where': 'Where:',
        'when' : 'When:'
      });

      $translateProvider.translations('German', {
        'description' : 'Nimm daran teil, wenn wir mit Hunderten von Strickern auf der ganzen Welt am gleichen Tag stricken!',
        'where': 'Wo:',
        'when': 'Wann:'
      });
   
      $translateProvider.preferredLanguage('English');
  }]);
