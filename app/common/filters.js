'use strict';

/**
 * @ngdoc function
 * @name trackEmpApp.filter:addSpace
 * @description
 * # AddSpaceFilter
 * Filter of the trackEmpApp
 */
angular.module("trackEmpApp")
  .filter("addSpace", function () {
    return function (input) {
      return input.replace(/([a-z])([A-Z])/g, '$1 $2')
    }
  });
