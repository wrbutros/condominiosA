'use strict';

angular
    .module('app.expenseReport')
    .controller('ExpenseReportCtrl', function ($scope) {

        // Se convierte en RESTANGULAR y consumo un servicio
        // "URL_BACK"/v1/expense/report
        // 0.0.0.0:8882/v1/expense/report
        // http://url_backend/v1/expense/report
        $scope.gridData = {
            caption: "EGRESOS",
            hiddengrid: true,
            data: [
                {
                    id: "1",
                    tipoGasto: "ADMINISTRACION-REMUNERACIONES",
                    detalle: "Sueldo Liquidos del Personal",
                    documento: "Egreso #20",
                    total: 1
                },
                {
                    id: "2",
                    tipoGasto: "ADMINISTRACION-REMUNERACIONES",
                    detalle: "Previred",
                    documento: "Egreso #22",
                    total: 2
                },
                {
                    id: "3",
                    tipoGasto: "CONSUMO",
                    detalle: "Articulos de aseo",
                    documento: "Egreso #224",
                    total: "123000"
                },
                {
                    id: "4",
                    tipoGasto: "CONSUMO",
                    detalle: "Previred",
                    documento: "Egreso #22",
                    total: "733654"
                },
                {
                    id: "5",
                    tipoGasto: "MANTENCIONES",
                    detalle: "Sueldo Liquidos del Personal",
                    documento: "Egreso #20",
                    total: "4790160"
                },
                {
                    id: "6",
                    tipoGasto: "MANTENCIONES",
                    detalle: "Previred",
                    documento: "Egreso #22",
                    total: "733654"
                },
                {
                    id: "7",
                    tipoGasto: "REPARACIONES",
                    detalle: "Sueldo Liquidos del Personal",
                    documento: "Egreso #20",
                    total: "4790160"
                },
                {
                    id: "8",
                    tipoGasto: "REPARACIONES",
                    detalle: "Previred",
                    documento: "Egreso #22",
                    total: "733654"
                },
                {
                    id: "9",
                    tipoGasto: "VARIOS",
                    detalle: "Sueldo Liquidos del Personal",
                    documento: "Egreso #20",
                    total: "4790160"
                },
                {
                    id: "10",
                    tipoGasto: "VARIOS",
                    detalle: "Previred",
                    documento: "Egreso #22",
                    total: "733654"
                }
            ],
            colNames: ['id', 'Tipo Gasto', 'Detalle', 'Documento', 'Total'],
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
                    edittype:"select",
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
                    name: 'total',
                    index: 'total',
                    align: "right",
                    formatter: "integer",
                    editable: true,
                    summaryTpl: "Sum: {0}", // set the summary template to show the group summary
                    summaryType: "sum" // set the formula to calculate the summary type
                }
            ]
        };

        $scope.gridData6 = {
            caption: "INGRESOS",
            hiddengrid: true,
            data: [
                {
                    id: "1",
                    tipoGasto: "GASTOS A COBRAR / DESCONTAR",
                    detalle: "Sueldo Liquidos del Personal",
                    documento: "Egreso #20",
                    total: "4790160"
                },
                {
                    id: "2",
                    tipoGasto: "GASTOS A COBRAR / DESCONTAR",
                    detalle: "Previred",
                    documento: "Egreso #22",
                    total: "733654"
                }
            ],
            colNames: ['id', 'Tipo Gasto', 'Detalle', 'Documento', 'Total'],
            colModel: [
                {
                    name: 'id',
                    index: 'id',
                    hidden: true
                },
                { name: 'tipoGasto', index: 'tipoGasto'},
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
                    name: 'total',
                    index: 'total',
                    align: "right",
                    formatter: "integer",
                    editable: true,
                    summaryTpl: "Sum: {0}", // set the summary template to show the group summary
                    summaryType: "sum" // set the formula to calculate the summary type
                }
            ]
        };

        //$scope.breadOne = "Build ???";
    });