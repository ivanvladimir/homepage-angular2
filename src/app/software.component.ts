import {Component} from '@angular/core';
import {SWComponent} from './sw.component';
import {DataService} from './data.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-software',
  providers: [DataService],
  templateUrl: './templates/software.html'
})

export class SoftwareComponent {
  public lang: string = 'en';
  public data;
  constructor(dataService: DataService,
            private titleService: Title
  ) {
      this.data = dataService.getJSON('software.json');
      this.titleService.setTitle("Software -- Ivan Vladimir" );
  }
}


