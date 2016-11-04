import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-sw',
    templateUrl: 'templates/sw.html',
})

export class SWComponent {
    @Input() sw;
    @Input() lang;
    constructor() {}
}

