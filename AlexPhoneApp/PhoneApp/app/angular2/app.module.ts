import * as angular_1 from 'angular';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';

import { AppComponent }  from './app.component';
import {CounterComponent} from './counter.component';
import {PagefooterN2Component} from './pagefooter_ng2.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, PagefooterN2Component, CounterComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}

