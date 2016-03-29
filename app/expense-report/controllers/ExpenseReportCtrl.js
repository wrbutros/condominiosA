'use strict';

angular
    .module('app.expenseReport')
    .controller(
        'ExpenseReportCtrl',
        function ($scope,
                  $location,
                  gridDataRaw) {

            $scope.gridData = gridDataRaw;

            $scope.gridData.customButton = {
                id: "ui-prorrotear",
                caption: "Prorrotear",
                buttonicon: "ui-icon-newwin",
                onClickButton: function () {
                    $location.path('/collection/expenses');
                },
                position: "last",
                title: "Prorrotear",
                cursor: "pointer"
            };

        });
