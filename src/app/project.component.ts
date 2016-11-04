import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-project',
    templateUrl: 'templates/project.html',
})

export class ProjectComponent {
    @Input() proj;
    @Input() lang;
    constructor() {}
}

