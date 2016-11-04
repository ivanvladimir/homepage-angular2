import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-thesis',
    templateUrl: 'templates/thesis.html',
})

export class ThesisComponent {
    @Input() thesis;
    @Input() lang;
    constructor() {}
}

