import {Component} from '@angular/core';
import {PublicationComponent} from './publication.component';
import {SearchBoxComponent} from './search-box.component';
import {DataService} from './data.service';


@Component({
    selector: 'my-publications',
    providers: [DataService],
    templateUrl: 'templates/publications.html',
})

export class PublicationsComponent {
  public lang: string = 'eng';
  public publication_groups;
  public term = '';
  constructor(private dataService: DataService) {
    this.publication_groups = dataService.getJSON('publications.json');
  }
  onUpdate(term: string): void {
    this.term = term;
  }
}

