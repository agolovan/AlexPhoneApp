"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const upgrade_1 = require('@angular/upgrade');
const app_module_1 = require('./angular2/app.module');
const counter_component_1 = require('./angular2/counter.component');
const pagefooter_ng2_component_1 = require('./angular2/pagefooter_ng2.component');
//var appResourcesService = require('./services/appresources.services');
//Getting upgrade adapter
let upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//Making Angular 2.0 component to be used in Angular 1.5 app
angular.module('phonecatApp')
    .directive('counter', upgradeAdapter.downgradeNg2Component(counter_component_1.CounterComponent))
    .directive('pagefooterng2', upgradeAdapter.downgradeNg2Component(pagefooter_ng2_component_1.PagefooterN2Component));
upgradeAdapter.upgradeNg1Provider('appResourcesService');
upgradeAdapter.bootstrap(document.body, ['phonecatApp']);
//# sourceMappingURL=main.js.map