import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-student',
    templateUrl: 'templates/student.html',
})

export class StudentComponent {
    @Input() student;
    @Input() lang;
    constructor() {}
}

