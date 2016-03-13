"use strict";

angular.module('app.expenseReport', ['ui.router', 'restangular'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.expenseReport', {
            url: '/expense/report',
            data: {
                title: 'Expense Report'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/expense-report/views/index.html',
                    controller: 'ExpenseReportCtrl'
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