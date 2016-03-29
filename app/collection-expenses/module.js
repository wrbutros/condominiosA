"use strict";

angular
    .module('app.collectionExpenses', ['ui.router', 'restangular'])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.collectionExpenses', {
                // Se pasa el id de expenseReport
                url: '/collection/expenses/:id',
                data: {
                    title: 'Collection Expenses'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/collection-expenses/views/index.html',
                        controller: 'CollectionExpensesCtrl'
                    }
                },
                resolve: {
                    gridDataRaw: function ($stateParams, ExpenseDetails) {
                        var id = $stateParams.id;
                        return ExpenseDetails.one(id).get();
                    },
                    scripts: function (lazyScript){
                        return lazyScript.register([
                            'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                            'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                        ]);

                    }
                }
            });

    });
