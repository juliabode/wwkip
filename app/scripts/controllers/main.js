'use strict';

/**
 * @ngdoc function
 * @name wwkipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwkipApp
 */
angular.module('wwkipApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.regions = [
        { name: "africa" },
        { name: "america"},
        { name: "asia" },
        { name: "europe" },
        { name: "southpacific"}
    ];

    $scope.createPdf = function() {$scope.msg = "in";
        $http.get('application/runPhantomjs.php').success( function() {
            $scope.msg = "Pdf created.";
        });
    };

  });
