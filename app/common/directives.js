'use strict';

/**
 * @ngdoc function
 * @name trackEmpApp.directive
 * @description
 * Custom Directives of the trackEmpApp
 */
(function () {
  var isLoggedIn = false;
  angular.module("trackEmpApp")
    .directive("empDrag", [function () {
      return {
        restrict: "A",
        link: function (scope, elem, attr) {
          var dragStart = angular.element(elem).on("dragstart", function (evt) {
            isLoggedIn = isLoggedIn || scope.employees.isLoggedIn;
            if (!isLoggedIn) {
              evt.preventDefault();
              angular.element("#loginPopup").modal("show");
            }
            scope.chair.detailVisible = false;
            scope.employees.dragStart = scope.chair;
            scope.$digest();
          });
          scope.$on("$destroy", dragStart);
        }
      }
    }])
    .directive("empDrop", [function () {
      return {
        restrict: "A",
        link: function (scope, elem, attr) {
          var dragOver = angular.element(elem).on("dragover", function (evt) {
            evt.preventDefault();
          });
          var dropEvt = angular.element(elem).on("drop", function (evt) {
            evt.preventDefault();
            var temp = scope.employees.emp[(scope.chair.id - 1)];
            scope.employees.emp[(scope.chair.id - 1)] = angular.copy(scope.employees.dragStart); //inorder to change the id, need to copy
            scope.employees.emp[(scope.employees.dragStart.id - 1)] = temp;
            scope.employees.emp[(scope.chair.id - 1)].id = temp.id;// Change the id | index also
            scope.employees.emp[(scope.employees.dragStart.id - 1)].id = scope.employees.dragStart.id;// Change the id | index also
            scope.$emit("updateEmp", scope.employees.emp);
            delete scope.employees.dragStart;
          });
          scope.$on("$destroy", dragOver);
          scope.$on("$destroy", dropEvt);
        }
      }
    }]);

})();
