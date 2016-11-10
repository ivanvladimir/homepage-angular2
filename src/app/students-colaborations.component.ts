import {Component} from '@angular/core';
import {StudentComponent} from './student.component';
import {DataService} from './data.service';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'my-students-collaborations',
  providers: [DataService],
  templateUrl: 'templates/students-collaborations.html',
})

export class StudentsCollaborationsComponent {
  public lang: string = 'en';
  public students;
  constructor(dataService: DataService,
            private titleService: Title
  ) {
      this.students = dataService.getJSON('students_collaborations.json');
      this.titleService.setTitle("Collaborations with students -- Ivan Vladimir" );
  }
}


