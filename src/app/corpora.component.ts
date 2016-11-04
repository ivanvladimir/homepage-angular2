import {Component} from '@angular/core';
import {SWComponent} from './sw.component';
import {DataService} from './data.service';

@Component({
  selector: 'my-corpora',
  providers: [DataService],
  templateUrl: 'templates/software.html'
})

export class CorporaComponent {
  public lang: string = 'en';
  public data;
  constructor(dataService: DataService) {
      this.data = dataService.getJSON('corpora.json');
  }
}


