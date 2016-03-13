'use strict';

angular
    .module('app.expenseReport')
    .service('userService', function () {
        this.users = ['John', 'James', 'Jake'];
    })
    .controller('ExpenseReportCtrl', function ($scope) {

            // Se convierte en RESTANGULAR y consumo un servicio
            // "URL_BACK"/v1/expense/report
            // 0.0.0.0:8882/v1/expense/report
            // http://url_backend/v1/expense/report
            $scope.gridData = {
                caption: "Gastos Comunes",
                //editurl: "localhost:8882/v1/entrypoint",
                hiddengrid: false,
                hidegrid: false,
                colNames: ['id', 'Tipo Gasto', 'Detalle', 'Documento', 'Ingreso', 'Egreso'],
                colModel: [
                    {
                        name: 'id',
                        index: 'id',
                        hidden: true
                    },
                    {
                        name: 'tipoGasto',
                        index: 'tipoGasto',
                        editable: true,
                        edittype: "select",
                        editoptions: {
                            value: 'ADMINISTRACION-REMUNERACIONES:ADMINISTRACION-REMUNERACIONES;CONSUMO:CONSUMO;MANTENCIONES:MANTENCIONES'
                        }
                    },
                    {
                        name: 'detalle',
                        index: 'detalle',
                        editable: true
                    },
                    {
                        name: 'documento',
                        index: 'documento',
                        editable: true
                    },
                    {
                        name: 'ingreso',
                        index: 'ingreso',
                        align: "right",
                        formatter: "integer",
                        editable: true,
                        fixed: true,
                        width: 75,
                        summaryTpl: "{0}", // set the summary template to show the group summary
                        summaryType: "sum" // set the formula to calculate the summary type
                    },
                    {
                        name: 'egreso',
                        index: 'egreso',
                        align: "right",
                        formatter: "integer",
                        editable: true,
                        fixed: true,
                        width: 75,
                        summaryTpl: "{0}", // set the summary template to show the group summary
                        summaryType: "sum" // set the formula to calculate the summary type
                    }
                ],
                data: [
                    {
                        id: "1",
                        tipoGasto: "ADMINISTRACION-REMUNERACIONES",
                        detalle: "Sueldo Liquidos del Personal",
                        documento: "Egreso #20",
                        ingreso: 1,
                        egreso: 0
                    },
                    {
                        id: "2",
                        tipoGasto: "ADMINISTRACION-REMUNERACIONES",
                        detalle: "Previred",
                        documento: "Egreso #22",
                        ingreso: 2,
                        egreso: 0
                    },
                    {
                        id: "3",
                        tipoGasto: "CONSUMO",
                        detalle: "Articulos de aseo",
                        documento: "Egreso #224",
                        ingreso: "123000",
                        egreso: 0
                    },
                    {
                        id: "4",
                        tipoGasto: "CONSUMO",
                        detalle: "Previred",
                        documento: "Egreso #22",
                        ingreso: "733654",
                        egreso: 0
                    },
                    {
                        id: "5",
                        tipoGasto: "MANTENCIONES",
                        detalle: "Sueldo Liquidos del Personal",
                        documento: "Egreso #20",
                        ingreso: "4790160",
                        egreso: 0
                    },
                    {
                        id: "6",
                        tipoGasto: "MANTENCIONES",
                        detalle: "Previred",
                        documento: "Egreso #22",
                        ingreso: "733654",
                        egreso: 0
                    },
                    {
                        id: "7",
                        tipoGasto: "REPARACIONES",
                        detalle: "Sueldo Liquidos del Personal",
                        documento: "Egreso #20",
                        ingreso: "4790160",
                        egreso: 0
                    },
                    {
                        id: "8",
                        tipoGasto: "REPARACIONES",
                        detalle: "Previred",
                        documento: "Egreso #22",
                        ingreso: "733654",
                        egreso: 0
                    },
                    {
                        id: "9",
                        tipoGasto: "VARIOS",
                        detalle: "Sueldo Liquidos del Personal",
                        documento: "Egreso #20",
                        ingreso: "0",
                        egreso: 5456
                    },
                    {
                        id: "10",
                        tipoGasto: "VARIOS",
                        detalle: "Previred",
                        documento: "Egreso #22",
                        ingreso: 0,
                        egreso: "733655"
                    }
                ]
            };

            //$scope.getData = Restangular.all('entrypoint').getList();
        }
    )
;

