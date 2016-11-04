import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-class',
    templateUrl: 'templates/class.html',
})

export class ClassComponent {
    @Input() course;
    @Input() lang;
    constructor() {}
}

