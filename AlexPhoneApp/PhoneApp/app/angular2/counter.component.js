"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let CounterComponent = class CounterComponent {
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
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], CounterComponent.prototype, "maxvalue", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], CounterComponent.prototype, "counter", void 0);
CounterComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [])
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map