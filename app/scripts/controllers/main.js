'use strict';

/**
 * @ngdoc function
 * @name creativeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the creativeApp
 */
angular.module('creativeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
