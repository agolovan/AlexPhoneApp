import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './angular2/app.module';
import {CounterComponent} from './angular2/counter.component';
import {Injectable, Inject} from '@angular/core';
import {Component, Input, OnInit} from '@angular/core';
import {PagefooterN2Component} from './angular2/pagefooter_ng2.component';


//var appResourcesService = require('./services/appresources.services');


//Getting upgrade adapter
let upgradeAdapter = new UpgradeAdapter(AppModule);

platformBrowserDynamic().bootstrapModule(AppModule);

//Making Angular 2.0 component to be used in Angular 1.5 app
angular.module('phonecatApp')
    .directive(
        'counter',
            <any>upgradeAdapter.downgradeNg2Component(CounterComponent))
    .directive(
        'pagefooterng2',
        <any>upgradeAdapter.downgradeNg2Component(PagefooterN2Component))


 
upgradeAdapter.upgradeNg1Provider('appResourcesService');

upgradeAdapter.bootstrap(document.body, ['phonecatApp']);







