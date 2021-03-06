﻿(function () {
    'use strict';

    var serviceId = 'entityManagerFactory';
    angular.module('app').factory(serviceId, ['config', entityManagerFactory]);

    function entityManagerFactory(config) {
        newManager: newManager
    };

    function newManager() {
        return new breeze.EntityManager(config.remoteServiceName());
    };
})();