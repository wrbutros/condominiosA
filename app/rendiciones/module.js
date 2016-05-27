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
                url : '/condominios/:id_condominio/rendiciones/:id_rendicion',
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
                        var id_rendicion = parseInt($stateParams.id_rendicion);

                        // return Restangular
                        //     .one("condominios", id_condominio)
                        //     .one("rendiciones", id_rendicion)
                        //     .get();

                        /*TODO: Gets it from other site*/
                        var table = [{
                            "caption": "Gastos Comunes",
                            "height": 400,
                            "hiddengrid": false,
                            "hidegrid": false,
                            "grouping": true,
                            "colNames": [
                                "id",
                                "Tipo Gasto",
                                "Detalle",
                                "Documento",
                                "Ingreso",
                                "Egreso"
                            ],
                            "colModel": [
                                {
                                    "name": "id",
                                    "index": "id",
                                    "hidden": true
                                },
                                {
                                    "name": "tipoGasto",
                                    "index": "tipoGasto",
                                    "editable": true,
                                    "edittype": "select",
                                    "editoptions": {
                                        "value": "ADMINISTRACION-REMUNERACIONES:ADMINISTRACION-REMUNERACIONES;CONSUMO:CONSUMO;MANTENCIONES:MANTENCIONES"
                                    }
                                },
                                {
                                    "name": "detalle",
                                    "index": "detalle",
                                    "editable": true
                                },
                                {
                                    "name": "documento",
                                    "index": "documento",
                                    "editable": true
                                },
                                {
                                    "name": "ingreso",
                                    "index": "ingreso",
                                    "align": "right",
                                    "formatter": "integer",
                                    "editable": true,
                                    "fixed": true,
                                    "width": 75,
                                    "summaryTpl": "{0}",
                                    "summaryType": "sum"
                                },
                                {
                                    "name": "egreso",
                                    "index": "egreso",
                                    "align": "right",
                                    "formatter": "integer",
                                    "editable": true,
                                    "fixed": true,
                                    "width": 75,
                                    "summaryTpl": "{0}",
                                    "summaryType": "sum"
                                }
                            ],
                            "data": [

                            ]
                        }];

                        data =  Restangular
                            .one("condominios", id_condominio)
                            .one("rendicionActual")
                            .get();

                        table.data = data;
                        return table;

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
