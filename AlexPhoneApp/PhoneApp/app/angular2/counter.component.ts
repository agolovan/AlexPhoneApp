import {Component, Input, OnInit} from '@angular/core';
import {Injectable, Inject} from '@angular/core';

@Component({
    selector: 'counter',
    styles: [`
    .counter {
      position: relative;
      border: 1;
    }
    .counter__button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      width: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `],
    template: `
    <div class="counter">
      <div class="counter__container">
        <ng-content></ng-content> 
        <button (click)="decrement();" class="counter__button">
          -
        </button>&nbsp;&nbsp;
        <a href="{{path}}/{{counter}}" class="nav-span">{{counter}}</a>&nbsp;
        <button (click)="increment();" class="counter__button">
          +
        </button> &nbsp;&nbsp;&nbsp;
      
        
      </div>
    </div>
  `
})
export class CounterComponent implements OnInit {
    @Input() maxvalue: number;
    @Input() counter: number;
    private path: string;
    
    ngOnInit() {
        this.path = location.href;
    }

    increment() {
        this.counter++;
        if (this.counter > this.maxvalue) {
            this.counter = this.maxvalue;
        }
    }
    decrement() {
        this.counter--;
        if (this.counter < 0) {
            this.counter = 0;
        }
 
    }
}

