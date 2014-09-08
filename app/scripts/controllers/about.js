'use strict';

/**
 * @ngdoc function
 * @name demoExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoExampleApp
 */
angular.module('demoExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
