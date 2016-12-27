'use strict';

/**
 * @ngdoc function
 * @name trackEmpApp.directive
 * @description
 * Custom Directives of the trackEmpApp
 */
(function () {
  var isLoggedIn = false,
    notificationMsg = {};
  angular.module("trackEmpApp")
    .directive("empDrag", [function () {
      return {
        restrict: "A",
        link: function (scope, elem, attr) {
          var dragStart = angular.element(elem).on("dragstart", function (evt) {
            isLoggedIn = isLoggedIn || scope.employees.isLoggedIn;
            notificationMsg.startTable = parseInt(attr.empDrag) + 1;
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
    .directive("empDrop", ['$timeout', function ($timeout) {
      return {
        restrict: "A",
        link: function (scope, elem, attr) {
          var timeout;
          var dragOver = angular.element(elem).on("dragover", function (evt) {
            evt.preventDefault();
          });
          var dropEvt = angular.element(elem).on("drop", function (evt) {
            evt.preventDefault();
            notificationMsg.endTable = parseInt(attr.empDrop) + 1;
            notificationMsg.employeeName = scope.employees.dragStart.name;

            notificationMsg = notificationMsg.startTable === notificationMsg.endTable ? notificationMsg.employeeName + " has been moved in Table " + notificationMsg.startTable : notificationMsg.employeeName + " has been moved from Table " + notificationMsg.startTable + " to Table " + notificationMsg.endTable;
            var temp = scope.employees.emp[(scope.chair.id - 1)];
            scope.employees.emp[(scope.chair.id - 1)] = angular.copy(scope.employees.dragStart); //inorder to change the id, need to copy
            scope.employees.emp[(scope.employees.dragStart.id - 1)] = temp;
            scope.employees.emp[(scope.chair.id - 1)].id = temp.id;// Change the id | index also
            scope.employees.emp[(scope.employees.dragStart.id - 1)].id = scope.employees.dragStart.id;// Change the id | index also
            scope.$emit("updateEmp", {empData: scope.employees.emp, notificationMsg: notificationMsg});
            notificationMsg = {};
            delete scope.employees.dragStart;
            timeout = $timeout(function(){
              scope.employees.notificationMsg = "";
            }, 10000);
          });
          scope.$on("$destroy", dragOver);
          scope.$on("$destroy", dropEvt);
          scope.$on("$destroy", timeout);
        }
      }
    }]);

})();
