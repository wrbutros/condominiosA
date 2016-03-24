'use strict';

angular
    .module('app.expenses')
    .factory('Expenses', function (Restangular) {
        return Restangular.service('expenses');
    });
