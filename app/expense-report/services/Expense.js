'use strict';

angular
    .module('app.expenseReport')
    .factory('Expense', function (Restangular) {
        return Restangular.service('expense/report');
    });
