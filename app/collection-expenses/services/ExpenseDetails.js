'use strict';

angular
    .module('app.collectionExpenses')
    .factory('ExpenseDetails', function (Restangular) {
        return Restangular.service('expenseDetails/report');
    });
