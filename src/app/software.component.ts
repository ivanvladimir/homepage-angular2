import {Component} from '@angular/core';
import {SWComponent} from './sw.component';
import {DataService} from './data.service';

@Component({
  selector: 'my-software',
  providers: [DataService],
  templateUrl: './templates/software.html'
})

export class SoftwareComponent {
  public lang: string = 'en';
  public data;
  constructor(dataService: DataService) {
      this.data = dataService.getJSON('software.json');
  }
}


