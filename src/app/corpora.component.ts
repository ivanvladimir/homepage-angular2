import {Component} from '@angular/core';
import {SWComponent} from './sw.component';
import {DataService} from './data.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-corpora',
  providers: [DataService],
  templateUrl: 'templates/corpora.html'
})

export class CorporaComponent {
  public lang: string = 'en';
  public data;
  constructor(dataService: DataService,
            private titleService: Title
  ) {
        this.data = dataService.getJSON('corpora.json');
        this.titleService.setTitle("Corpora -- Ivan Vladimir" );
  }
}


