'use strict';

/**
 * @ngdoc overview
 * @name demoExampleApp
 * @description
 * # demoExampleApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'myApp.controllers',
    'myApp.memoryServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/employees',{
      templateUrl: 'views/employee-list.html', 
      controller: 'EmployeeListCtrl'
    });
    $routeProvider
    .when('/employees/:employeeId', {
      templateUrl: 'views/employee-detail.html', 
      controller: 'EmployeeDetailCtrl'
    });
    $routeProvider
    .when('/employees/:employeeId/reports', {
      templateUrl: 'views/report-list.html', 
      controller: 'ReportListCtrl'
    });
    $routeProvider
    .otherwise({redirectTo: '/employees'});
  });
