import { RouterModule, Routes } from '@angular/router';
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

export const routes: Routes = [
    { path: '',                                 component: HomeComponent    },
    { path: 'publications',              component: PublicationsComponent   },
    { path: 'publications_year',      component: PublicationYearComponent   },
    { path: 'projects',                      component: ProjectsComponent   },
    { path: 'teaching',                      component: TeachingsComponent  },
    { path: 'theses',                          component: ThesesComponent   },
    { path: 'software',                      component: SoftwareComponent   },
    { path: 'corpora',                        component: CorporaComponent   },
    { path: 'students',                      component: StudentsComponent   },
    { path: 'blog/:page',                        component: BlogComponent   },
    { path: 'tag/:tag/:page',                     component: TagComponent   },
    { path: 'students_col',    component: StudentsCollaborationsComponent   },
    { path: 'own_theses',                     component: OwnThesesComponent },
    { path: 'post/:path',                        component: PostComponent   },
    { path: 'page/:path',                       component: PageComponent    },
    { path: '**',                          component: NotFoundComponent     }
]


