"use strict";

angular
    .module('app.rendiciones', [
        'ui.router',
        'restangular'
    ])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.rendicionesMes', {
                // Esta url hace match entre mes y año del condominio (id)
                url : '/condominios/:id_condominio/rendiciones/:id_rendiciones',
                data: {
                    title: 'Rendiciones del Mes'
                },
                views: {
                    "content@app": {
                        controller: 'RendicionesCtrl',
                        templateUrl: 'app/rendiciones/views/index.html'
                    }
                },
                resolve: {
                    gridDataRaw: function ($stateParams, Restangular) {
                        var id_condominio = parseInt($stateParams.id_condominio);
                        var id_rendiciones = parseInt($stateParams.id_rendiciones);

                        return Restangular
                            .one("condominios", id_condominio)
                            .one("rendiciones", id_rendiciones)
                            .get();

                        //var id = $stateParams.id;
                        //return Rendicion.one(id).get();

                    },
                    scripts: function (lazyScript) {
                        return lazyScript.register([
                            'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                            'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                        ]);

                    }
                }
            });

    });
