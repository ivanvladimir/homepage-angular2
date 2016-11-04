import {Component} from '@angular/core';
import {PublicationComponent} from './publication.component';
import {SearchPipe} from './search.pipe';
import {SearchBoxComponent} from './search-box.component';
import {DataService} from './data.service';

@Component({
    selector: 'my-publications',
    providers: [DataService],
    templateUrl: 'templates/publication-year.html',
})

export class PublicationYearComponent {
  public lang: string = 'eng';
  public term = '';
  public publications;
  constructor(private dataService: DataService) {
    this.publications = dataService.getJSON('publications.json');
  }

  getGroups ( pubs: string[] ) {
    let publication_groups = {};
    if ( pubs ) {
    for ( let group in pubs ) {
        let group_ = pubs[group]['publications'];
        for ( let pub in group_ ) {
            pub = group_[pub];
            if ( pub['year'] in publication_groups ) {
                publication_groups[pub['year']].push(pub);
            } else {
                publication_groups[pub['year']] = [pub];
            }
        }
    }
    let years = [];
    for ( let k in publication_groups ) {
        years.push(k);
    }
    years.sort().reverse();
    let pg = [];
    for ( let y in years ) {
        y = years[y];
        pg.push( {'labels' : {'en' : y, 'es' : y}, 'publications' : publication_groups[y]});
    }
    return pg;
    }
  }
  onUpdate( term: string ): void {
    this.term = term;
  }
}

