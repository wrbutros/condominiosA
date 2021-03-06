"use strict";

angular
    .module("app.collectionExpenses")
    .controller("CollectionExpensesCtrl", function ($scope) {

        $scope.gridData = {
            caption: "Cobranza Marzo - 2016",
            height: "auto",
            hiddengrid: false,
            hidegrid: false,
            colNames: [
                "id",
                "Departamento",
                "Torre",
                "% de Dominio",
                "Gastos Comunes",
                "Cobro Fonde Reserva 5%",
                "Lectura Anterior 02/2016",
                "Lectura Actual 03/2016",
                "Agua Caliente M3",
                "Agus Caliente $",
                "Multa e Intereses",
                "Morosidad",
                "Diferencias a favor",
                "Transbank",
                "Total",
                "Observaciones"
            ],
            colModel: [{
                name: "id",
                index: "id",
                hidden: true
            }, {}, {}, {}, {}, {}, {}, {},
                {}, {}, {}, {}, {}, {}, {}, {}
            ]
        };

    });