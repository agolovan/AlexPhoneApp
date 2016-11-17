import {Component} from '@angular/core';
import {CounterComponent} from './counter.component';

@Component({
    selector: 'my-app',
    templateUrl: 'angular2/app.component.html',
    styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `]
})

export class AppComponent {
}