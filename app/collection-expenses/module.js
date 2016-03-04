"use strict";

angular.module('app.collectionExpenses', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.collectionExpenses', {
            url: '/collection/expenses',
            data: {
                title: 'Collection Expenses'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/collection-expenses/views/index.html',
                    controller: 'CollectionExpensesCtrl'
                }
            }
        })

});