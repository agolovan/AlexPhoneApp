import {Component, Input, OnInit} from '@angular/core';
import {Injectable, Inject} from '@angular/core';


@Component({
    selector: 'pagefooterng2',
    template: `
     <div class="pagefooter-wrapper">,
		  <span class="pagefooter-text">{{buildNumber}} | <a href="http://www.msn.com" target="_blank" tabindex="-1">Terms of Service</a></span>
     </div>
    `
})

export class PagefooterN2Component implements OnInit {

    private message: string;
    private buildNumber: number;

    constructor( @Inject('appResourcesService') appResourcesService) {
        this.buildNumber = appResourcesService.getBuildNumber();
    }

    ngOnInit() {
        this.message = "Alex Golovan";
    }
}



