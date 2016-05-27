'use strict';

angular
    .module('app.rendiciones')
    .controller(
        'RendicionesCtrl',
        function ($scope,
                  $location,
                  gridDataRaw) {

            /*TODO: Gets it from other site*/
            var table = {
                "caption": "Gastos Comunes",
                "editurl": "http://localhost:8000/v1/" + "glosa/jqgrid/",
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
                "data": []
            };

            table.data = gridDataRaw.results[0].data;
            $scope.gridData = table;

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
