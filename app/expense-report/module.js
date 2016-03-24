"use strict";

angular
    .module('app.expenseReport', ['ui.router', 'restangular'])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.expenseReport', {
                // Esta url hace match entre mes y año del condominio (id)
                url: '/expense/report/:id',
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
                    gridDataRaw: function ($stateParams, Expense) {
                        var id = $stateParams.id;
                        return Expense.one(id).get();
                    },
                    scripts: function (lazyScript) {
                        return lazyScript.register([
                            'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                            'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                        ])

                    }
                }
            })

    });