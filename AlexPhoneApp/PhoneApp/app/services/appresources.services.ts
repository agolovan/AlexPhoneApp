//import { UpgradeAdapter } from '@angular/upgrade';

(function () {
    'use strict';
    angular.module('phoneList').service('appResourcesService', appResourcesService);
    function appResourcesService() {
        // APPLICATION CONSTANTS:
        var BUILD_NUMBER = 'Regional Beta 1.0';
        function getBuildNumber() {
            return BUILD_NUMBER;
        }
        return {
            getBuildNumber: getBuildNumber
        };
    }
})();
