import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProjectComponent} from './project.component';
import {DataService} from './data.service';

@Component({
  selector: 'my-projects',
  providers: [DataService],
  templateUrl: 'templates/projects.html',
})



export class ProjectsComponent {
  public lang: string = 'en';
  public projects;
  constructor(dataService: DataService) {
      this.projects = dataService.getJSON('projects.json');
  }
}


