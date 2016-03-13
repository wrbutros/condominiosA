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
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                        'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                    ])

                }
            }
        })

});