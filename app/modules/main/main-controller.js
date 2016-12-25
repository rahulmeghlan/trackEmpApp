'use strict';

/**
 * @ngdoc function
 * @name trackEmpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackEmpApp
 */
angular.module("trackEmpApp")
  .controller("trackEmpCtrl", ['employees', function (employees) {
    var self = this,
      selectedFilters = [];

    self.tableCount = new Array(Math.ceil(employees.length / 4));
    self.teams = {};

    self.tableData = {};
    self.searchKey = "";
    self.filters = ["role", "team", "project"];
    self.showFilter = false;
    self.filterVals = [];


    self.searchEmployee = function () {
      if (self.searchKey.trim().length && self.searchKey.trim().length > 2) {
        angular.forEach(employees, function (val) {
          val.active = val.name.trim().toLowerCase().match(self.searchKey.trim().toLowerCase()) !== null;
        });
      } else {
        resetFilters();
      }
    };

    self.toggleFilter = function () {
      self.showFilter = !self.showFilter;
    };

    self.toggleSubFilter = function (filter, event) {
      self.filterVals = self.teams[filter];
      if (!event.currentTarget.checked) {
        angular.forEach(self.teams[filter], function (val, key) {
          self[key] = false;
          angular.forEach(val, function (index) {
            employees[index].active = false;
          });
        });
        self.showSubFilter = false;
      } else {
        self.showSubFilter = true;
      }
    };

    self.hideDetails = function (val) {
      val.detailVisible = false;
    };

    self.showDetails = function (val) {
      val.detailVisible = true;
    };

    self.selectedFilterVals = function (val, event) {
      if (event.currentTarget.checked) {
        selectedFilters = selectedFilters.concat(self.filterVals[val]);
      } else {
        angular.forEach(self.filterVals[val], function (index) {
          selectedFilters.splice(selectedFilters.indexOf(index), 1);
        })
      }
      updateTableData();
    };

    function updateTableData() {
      resetFilters();
      angular.forEach(selectedFilters, function (index) {
        employees[index].active = true;
      });
    }

    function resetFilters() {
      angular.forEach(employees, function (val) {
        val.active = false;
      });
    }

    function setTeams() {
      //Store Indexes of the filters from the employees array.
      angular.forEach(employees, function (val, key) {
        for (var i = 0; i < self.filters.length; i++) {
          var filter = val[self.filters[i]];
          if (typeof self.teams[self.filters[i]] === "undefined") {
            self.teams[self.filters[i]] = {};
            self.teams[self.filters[i]][filter] = [key];
          } else if (typeof self.teams[self.filters[i]][filter] === "undefined") {
            self.teams[self.filters[i]][filter] = [key];
          }
          else {
            self.teams[self.filters[i]][filter].push(key);
          }
        }
      });
    }

    function setTableData() {
      var key = 0;
      for (var i = 0; i < self.tableCount.length; i++) {
        self.tableData[i] = [];
        for (var j = 0; j < 4; j++) {
          self.tableData[i].push(employees[key]);
          ++key;
        }
      }
    }


    function init() {
      setTableData();
      setTeams();
    }

    init();
  }]);
