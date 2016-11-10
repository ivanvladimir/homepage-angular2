import {Component} from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-own-theses',
  templateUrl: 'templates/own-theses.html',
})

export class OwnThesesComponent {
 constructor(
            private titleService: Title
  ) {
    this.titleService.setTitle("Own theses -- Ivan Vladimir" );
  }
  
}


