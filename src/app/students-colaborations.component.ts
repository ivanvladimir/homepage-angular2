import {Component} from '@angular/core';
import {StudentComponent} from './student.component';
import {DataService} from './data.service';


@Component({
  selector: 'my-students-collaborations',
  providers: [DataService],
  templateUrl: 'templates/students-collaborations.html',
})

export class StudentsCollaborationsComponent {
  public lang: string = 'en';
  public students;
  constructor(dataService: DataService) {
      this.students = dataService.getJSON('students_collaborations.json');
  }
}


