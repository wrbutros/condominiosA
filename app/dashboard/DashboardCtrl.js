'use strict';

angular
    .module('app.dashboard')
    .controller(
        'DashboardCtrl',
        function ($scope,
                  dashboardDataRaw) {

            debugger;
            $scope.dashboardData = dashboardDataRaw;

        });
