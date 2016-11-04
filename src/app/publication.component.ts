import {Component, Input} from '@angular/core';

declare var ga:Function;

@Component({
  selector: 'my-publication',
  templateUrl: 'templates/publication.html'
})

export class PublicationComponent {
  @Input() pub;
  constructor() { }

  download_click(label: string, action: string){
        ga('send', {
            hitType: 'event',
            eventCategory: label,
            eventAction: action,
            eventLabel: "Publication"
            });
  }
}

