'use strict';

/**
 * @ngdoc function
 * @name wwkipApp.controller:PrintCtrl
 * @description
 * # PrintCtrl
 * Controller of the wwkipApp
 */
angular.module('wwkipApp')
  .controller('PrintCtrl', function ($scope, $http, $translate) {
    $http.get('application/languages.json').success( function(response) {
        $scope.getData = response;
        $scope.language = response[1];
        $scope.region = response[0];
        $translate.use($scope.language.name);
    });

    $scope.regions = [
        { name: "africa" },
        { name: "america"},
        { name: "asia" },
        { name: "europe" },
        { name: "southpacific"}
    ];

    $scope.languages = [
        { name: "German" },
        { name: "English"}
    ];

    $scope.changeLanguage = function (key) {
        $translate.use(key.name);
    };

  });
