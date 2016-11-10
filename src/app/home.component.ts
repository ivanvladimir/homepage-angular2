import {Component} from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'my-home',
    templateUrl: 'templates/home.html'
})

export class HomeComponent {
  constructor(
            private titleService: Title
  ) {
    this.titleService.setTitle("Homepage -- Ivan Vladimir" );
  }
 
}

