'use strict';

angular.module('app.expenseReport').controller('ExpenseReportCtrl', function ($scope) {

    $scope.gridData = {
        caption: "ADMINISTRACION-REMUNERACIONES",
        data: [
            {
                id: "1",
                detalle: "Sueldo Liquidos del Personal",
                documento: "Egreso #20",
                total: "4790160"
            },
            {
                id: "2",
                detalle: "Previred",
                documento: "Egreso #22",
                total: "733654"
            }
        ],
        colNames: ['id', 'Detalle', 'Documento', 'Total'],
        colModel: [
            {
                name: 'id',
                index: 'id',
                hidden: true
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
                editable: true
            }
        ]
    };

    $scope.gridData2 = {
        caption: "CONSUMOS",
        data: [
            {
                id: "1",
                detalle: "Sueldo Liquidos del Personal",
                documento: "Egreso #20",
                total: "4790160"
            },
            {
                id: "1",
                detalle: "Previred",
                documento: "Egreso #22",
                total: "733654"
            }
        ],
        colNames: ['id', 'Detalle', 'Documento', 'Total'],
        colModel: [
            {
                name: 'id',
                index: 'id',
                hidden: true
            },
            {
                name: 'detalle',
                index: 'detalle',
                editable: false
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
                editable: true
            }
        ]
    };

    $scope.gridData3 = {
        caption: "MANTENCIONES",
        data: [
            {
                id: "1",
                detalle: "Sueldo Liquidos del Personal",
                documento: "Egreso #20",
                total: "4790160"
            },
            {
                id: "1",
                detalle: "Previred",
                documento: "Egreso #22",
                total: "733654"
            }
        ],
        colNames: ['id', 'Detalle', 'Documento', 'Total'],
        colModel: [
            {
                name: 'id',
                index: 'id',
                hidden: true
            },
            {
                name: 'detalle',
                index: 'detalle',
                editable: false
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
                editable: true
            }
        ]
    };

    $scope.gridData4 = {
        caption: "REPARACIONES",
        data: [
            {
                id: "1",
                detalle: "Sueldo Liquidos del Personal",
                documento: "Egreso #20",
                total: "4790160"
            },
            {
                id: "1",
                detalle: "Previred",
                documento: "Egreso #22",
                total: "733654"
            }
        ],
        colNames: ['id', 'Detalle', 'Documento', 'Total'],
        colModel: [
            {
                name: 'id',
                index: 'id',
                hidden: true
            },
            {
                name: 'detalle',
                index: 'detalle',
                editable: false
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
                editable: true
            }
        ]
    };

    $scope.gridData5 = {
        caption: "VARIOS",
        data: [
            {
                id: "1",
                detalle: "Sueldo Liquidos del Personal",
                documento: "Egreso #20",
                total: "4790160"
            },
            {
                id: "1",
                detalle: "Previred",
                documento: "Egreso #22",
                total: "733654"
            }
        ],
        colNames: ['id', 'Detalle', 'Documento', 'Total'],
        colModel: [
            {
                name: 'id',
                index: 'id',
                hidden: true
            },
            {
                name: 'detalle',
                index: 'detalle',
                editable: false
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
                editable: true
            }
        ]
    };

    $scope.gridData6 = {
        caption: "GASTOS A COBRAR / DESCONTAR",
        data: [
            {
                id: "1",
                detalle: "Sueldo Liquidos del Personal",
                documento: "Egreso #20",
                total: "4790160"
            },
            {
                id: "1",
                detalle: "Previred",
                documento: "Egreso #22",
                total: "733654"
            }
        ],
        colNames: ['id', 'Detalle', 'Documento', 'Total'],
        colModel: [
            {
                name: 'id',
                index: 'id',
                hidden: true
            },
            {
                name: 'detalle',
                index: 'detalle',
                editable: false
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
                editable: true
            }
        ]
    };

});