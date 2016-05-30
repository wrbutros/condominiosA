'use strict';

angular
    .module('app.residentes')
    .controller(
        'ResidentesCtrl',
        function(DTOptionsBuilder,
                 DTColumnBuilder,
                 gridDataRaw) {

            //debugger;
    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/datatables.standard2.json')
    //this.standardOptions = DTOptionsBuilder
      //  .fromSource(gridDataRaw.results[0].data)

    //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
                 "t" +
                 "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
        //DTColumnBuilder.newColumn('id').withClass('text-danger'),
        DTColumnBuilder.newColumn('rut'),
        DTColumnBuilder.newColumn('nombre'),
        DTColumnBuilder.newColumn('apellido_paterno'),
        DTColumnBuilder.newColumn('apellido_materno'),
        DTColumnBuilder.newColumn('genero'),
        DTColumnBuilder.newColumn('telefono'),
        DTColumnBuilder.newColumn('email'),
        DTColumnBuilder.newColumn('fecha_ingreso')
    ];


});
