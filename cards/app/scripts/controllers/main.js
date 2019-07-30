'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('cardsController', function ($scope) {
    $scope.person = [ {
    	name: "john smith",
    	age: 20,
    }, {
    	name: "will bravo",
    	age: 45,
    }, {
    	name: "tom cruise",
    	age: 74,
    }, {
    	name: "john smith",
    	age: 20,
    }, {
    	name: "will bravo",
    	age: 45,
    }, {
    	name: "tom cruise",
    	age: 74,
    }, {
    	name: "john smith",
    	age: 20,
    }, {
    	name: "will bravo",
    	age: 45,
    }, {
    	name: "tom cruise",
    	age: 74,
    } ]
  });
