import {Component} from '@angular/core';
import {StudentComponent} from './student.component';
import {KeyValue} from './key_value.pipe';
import {DataService} from './data.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-students',
  providers: [DataService],
  templateUrl: 'templates/students.html',
})

export class StudentsComponent {
  public lang: string = 'en';
  public students;
  constructor(dataService: DataService,
            private titleService: Title
  ) {
    this.students = dataService.getJSON('students.json');
    this.titleService.setTitle("Students -- Ivan Vladimir" );
  }
}


