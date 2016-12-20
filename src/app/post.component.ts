import { Component, AfterViewChecked, ViewChild, OnInit, NgZone, OnDestroy, Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';
import { RendermdService } from './rendermd.service';
import { PostsService } from './posts.service';
import { Subscription }   from 'rxjs/Subscription';
import { SanitizeHtmlPipe } from './sanitize.pipe';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'my-post',
    providers: [DataService, RendermdService],
    templateUrl: 'templates/post.html',
})

export class PostComponent implements  AfterViewChecked, OnInit {
    public text;
    public path: string;
    public url: string;
    post = {};
    prev_post;
    next_post;
    public autorender;
    subscription: Subscription;
    @ViewChild('homepage_content') homepage_content;

    constructor(private routeParams: ActivatedRoute,
            private router: Router,
            private rendermdService: RendermdService,
            private dataService: DataService,
            private titleService: Title,
            private postsService: PostsService) {

        };

    ngOnInit(){
        this.routeParams.params.subscribe( params => { 
            this.path = params['path'];         

            this.url  = "post/"+params['path'];         
            this.autorender = require('exports?$=renderMathInElement!./auto-render.js');

            
            this.postsService.getPosts().then(posts => {
                let curr = posts['titles'][this.path];
                let title = posts['posts'][curr]['title'];
                this.titleService.setTitle(title+" post -- Ivan Vladimir" );
                this.post = posts['posts'][curr];
                this.next_post = curr - 1 > 0                     ? posts['posts'][curr - 1] : undefined;
                this.prev_post = curr + 1 < posts['posts'].length ? posts['posts'][curr + 1] : undefined;

                if(this.post['library']){
                    for (var elem in this.post['library']) {
                        this.loadScript(this.post['library'][elem]);
                }}
                this.dataService.getPost(this.path).then(text => this.text = this.rendermdService.render(text));
            });
        });

    }

    public loadScript(path: string) {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = path;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    ngAfterViewChecked() {
        this.autorender(this.homepage_content.nativeElement,
           {
               delimiters: [
                   {left: '$$', right: '$$', display: true},
                   {left: '\\[', right: '\\]', display: true},
                   {left: '$', right: '$', display: false},
                   {left: '\\(', right: '\\)', display: false}
               ]
           }
         );
    }

}

