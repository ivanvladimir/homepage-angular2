import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProjectComponent} from './project.component';
import {DataService} from './data.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-projects',
  providers: [DataService],
  templateUrl: 'templates/projects.html',
})



export class ProjectsComponent {
  public lang: string = 'en';
  public projects;
  constructor(dataService: DataService,
            private titleService: Title
  
  ) {
      this.projects = dataService.getJSON('projects.json');
    this.titleService.setTitle("Projects -- Ivan Vladimir" );
  }
}


