'use strict';

/**
 * @ngdoc function
 * @name creativeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the creativeApp
 */
angular.module('creativeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
