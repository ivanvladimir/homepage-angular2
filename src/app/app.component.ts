import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/src/providers/angulartics2-ga';
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
import { Title }     from '@angular/platform-browser';

declare var ga:Function;

@Component({
    selector: 'my-app',
    providers: [ PostsService ],
    templateUrl: 'templates/index.html',
})

export class AppComponent {
  public posts = {'posts': [], 'titles': {}};
  public pathPost;
  private currentRoute: string;
  constructor ( angulartics2: Angulartics2, 
                angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
                postsService: PostsService,
                private titleService: Title
            ) {
        postsService.getPosts().then(posts =>this.posts = posts);
        this.titleService.setTitle("Home -- Ivan Vladimir" );
  }
}


