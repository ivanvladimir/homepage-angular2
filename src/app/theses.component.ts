import {Component} from '@angular/core';
import {ThesisComponent} from './thesis.component';
import {KeyValue} from './key_value.pipe';
import {DataService} from './data.service';


@Component({
  selector: 'my-theses',
  providers: [DataService],
  templateUrl: 'templates/theses.html',
})

export class ThesesComponent {
  public lang: string = 'en';
  public theses;
  constructor(dataService: DataService) {
      this.theses = dataService.getJSON('theses.json');
  }
}


