"use strict";

angular.module('app.buildingExpenses', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.buildingExpenses', {
            url: '/buildingExpenses',
            data: {
                title: 'Gastos Comunes'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/building-expenses/views/index.html',
                    controller: 'BuildingExpensesCtrl'
                }
            }
        })

});