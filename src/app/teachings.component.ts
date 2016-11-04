import {Component} from '@angular/core';
import {ClassComponent} from './class.component';
import {DataService} from './data.service';

@Component({
  selector: 'my-teachings',
  providers: [DataService],
  templateUrl: 'templates/teachings.html',
})

export class TeachingsComponent {
  public lang: string = 'en';
  public teachings;
  constructor(dataService: DataService) {
      this.teachings = dataService.getJSON('teaching.json');
  }
}


