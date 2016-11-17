'use strict';
// Define the `phonecatApp` module
angular.module('phonecatApp', [
    'ngAnimate',
    'ngRoute',
    'core',
    'phoneDetail',
    'phoneList',
]).run(function ($rootScope, $location) {
    $rootScope.location = $location;
});