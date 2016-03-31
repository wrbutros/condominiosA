'use strict';

angular
    .module('app.rendiciones')
    .factory('Rendicion', function (Restangular) {
        return Restangular.service('rendiciones/report');
    });
