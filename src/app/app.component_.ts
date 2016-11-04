import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PublicationsComponent } from './publications.component';
import { PublicationYearComponent } from './publication-year.component';
import { ProjectsComponent } from './projects.component';
import { TeachingsComponent } from './teachings.component';
import { ThesesComponent } from './theses.component';
import { OwnThesesComponent } from './own-theses.component';
import { StudentsComponent } from './students.component';
import { StudentsCollaborationsComponent } from './students-colaborations.component';
import { PostComponent } from './post.component';
import { PageComponent } from './page.component';
import { BlogComponent } from './blog.component';
import { TagComponent } from './tag.component';
import { SoftwareComponent } from './software.component';
import { CorporaComponent } from './corpora.component';
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home.component';
import { PostsService } from './posts.service';

import 'bootstrap-loader';
import 'normalize.css';
import 'font-awesome-webpack';

declare var ga:Function;

@Component({
    selector: 'my-app',
    providers: [PostsService ],
    templateUrl: 'templates/index.html'
})

export class AppComponent {
  public posts = {'posts': [], 'titles': {}};
  public pathPost;
  private currentRoute: string;
  constructor ( postsService: PostsService,
                router: Router,
                location: Location
            ) {
    postsService.getJSON().then( posts => {
            postsService.setPosts(posts);
            this.posts = posts;
            router.subscribe((val) => postsService.setPosts(posts));
    } );

   router.subscribe((event:Event) => {
            // Send GA tracking on NavigationEnd event. You may wish to add other 
            // logic here too or change which event to work with
                // When the route is '/', location.path actually returns ''.
                let newRoute = location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (this.currentRoute != newRoute) {
                    console.log(newRoute);
                    ga('send', 'pageview', newRoute);
                    this.currentRoute = newRoute;
                }
    }); 
  }
}


