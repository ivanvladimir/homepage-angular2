import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { Angulartics2Module } from 'angulartics2';
import {Ng2DisqusModule } from 'ng2-disqus';
import { Angulartics2GoogleAnalytics } from 'angulartics2/src/providers/angulartics2-ga';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routes } from './app.routes';
// App is our top level component
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { SearchPipe } from './search.pipe';
import { KeyValue } from './key_value.pipe';
import { KeysPipe } from './keys.pipe';
import { SWComponent} from './sw.component';
import { SanitizeHtmlPipe} from './sanitize.pipe';
import { ThesisComponent} from './thesis.component';
import { ClassComponent} from './class.component';
import { StudentComponent} from './student.component';
import { PublicationComponent} from './publication.component';
import { ProjectComponent} from './project.component';
import { SearchBoxComponent} from './search-box.component';
import { PublicationYearComponent} from './publication-year.component';
import { PublicationsComponent } from './publications.component';
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
import { PostsService } from './posts.service';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  Title,
  Angulartics2GoogleAnalytics
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};



@NgModule({
  bootstrap:    [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    Ng2DisqusModule,
    Angulartics2Module.forRoot()
  ],
  declarations: [ SoftwareComponent,CorporaComponent,StudentsComponent,BlogComponent,TagComponent,StudentsCollaborationsComponent,OwnThesesComponent,PageComponent,NotFoundComponent,ThesesComponent, HomeComponent, ProjectsComponent, TeachingsComponent, PublicationsComponent, AppComponent, KeyValue, KeysPipe, SearchPipe, SWComponent, SanitizeHtmlPipe, ThesisComponent,ClassComponent,StudentComponent,PublicationComponent, SearchBoxComponent, PublicationYearComponent,ProjectComponent,PostComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
