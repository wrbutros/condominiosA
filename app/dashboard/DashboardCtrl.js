'use strict';

angular
    .module('app.dashboard')
    .controller(
        'DashboardCtrl',
        function ($scope,
                  dashboardDataRaw) {

            $scope.dashboardData = dashboardDataRaw;

        });
