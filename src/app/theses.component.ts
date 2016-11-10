import {Component} from '@angular/core';
import {ThesisComponent} from './thesis.component';
import {KeyValue} from './key_value.pipe';
import {DataService} from './data.service';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'my-theses',
  providers: [DataService],
  templateUrl: 'templates/theses.html',
})

export class ThesesComponent {
  public lang: string = 'en';
  public theses;
  constructor(dataService: DataService,
            private titleService: Title
  ) {
      this.theses = dataService.getJSON('theses.json');
    this.titleService.setTitle("Supervised theses -- Ivan Vladimir" );
  }
}


