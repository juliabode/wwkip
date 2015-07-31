'use strict';

/**
 * @ngdoc function
 * @name wwkipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwkipApp
 */
angular.module('wwkipApp')
  .controller('MainCtrl', function ($scope, $http, $translate) {
    $scope.sendData = [
        { name: 'europe' },
        { name: 'German' }
    ];

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
        $scope.sendData[1].name = key.name;
    };

    $scope.changeRegion = function (key) {
        $scope.sendData[0].name = key.name;
    };

    $scope.createPdf = function() {
        $http.post('application/test.php', JSON.stringify($scope.sendData)).success(function(data) {
            $scope.msg = data;
        });

        $http.get('application/runPhantomjs.php').success( function(data) {
            $scope.msg = data;
            window.open(data);
        });
    };

  });
