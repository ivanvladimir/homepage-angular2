import {Component} from '@angular/core';
import {ClassComponent} from './class.component';
import {DataService} from './data.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-teachings',
  providers: [DataService],
  templateUrl: 'templates/teachings.html',
})

export class TeachingsComponent {
  public lang: string = 'en';
  public teachings;
  constructor(dataService: DataService,
            private titleService: Title
  ) {
      this.teachings = dataService.getJSON('teaching.json');
      this.titleService.setTitle("Courses -- Ivan Vladimir" );
  }
}


