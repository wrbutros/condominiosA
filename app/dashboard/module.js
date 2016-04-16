'use strict';

angular
    .module('app.dashboard', [
        'ui.router',
        'restangular'
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: '/condominios/:id_condominio/dashboards/:id_dashboard',
                data: {
                    title: 'Dashboard'
                },
                views: {
                    "content@app": {
                        controller: 'DashboardCtrl',
                        templateUrl: 'app/dashboard/dashboard.html'
                    }
                },
                resolve: {
                    dashboardDataRaw: function ($stateParams, Restangular) {
                        return Restangular.one("ciudades", 1).get();
                        /**var id_condominio = parseInt($stateParams.id_condominio);
                        var id_dashboard = parseInt($stateParams.id_dashboard);

                        return Restangular
                            .one("condominios", id_condominio)
                            .one("dashboards", id_dashboard)
                            .get();**/
                        
                    },
                    scripts: function (lazyScript) {
                        return lazyScript.register([
                            'build/vendor.graphs.js'
                        ]);
                    }
                }
            });
    });
