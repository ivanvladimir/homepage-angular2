import {Component} from '@angular/core';
import {PublicationComponent} from './publication.component';
import {SearchBoxComponent} from './search-box.component';
import {DataService} from './data.service';
import { Title }     from '@angular/platform-browser';


@Component({
    selector: 'my-publications',
    providers: [DataService],
    templateUrl: 'templates/publications.html',
})

export class PublicationsComponent {
  public lang: string = 'eng';
  public publication_groups;
  public term = '';
  constructor(private dataService: DataService,
            private titleService: Title
  ) {
    this.publication_groups = dataService.getJSON('publications.json');
    this.titleService.setTitle("Publications -- Ivan Vladimir" );
  }
  onUpdate(term: string): void {
    this.term = term;
  }
}

