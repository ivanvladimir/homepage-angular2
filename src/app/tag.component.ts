import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './posts.service';
import { Subscription }   from 'rxjs/Subscription';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'my-post',
    templateUrl: 'templates/blog.html'
})

export class TagComponent implements  OnInit {
    public page;
    public tag;
    public posts = [];
    public last  = 0;
    public pages = [];
    subscription: Subscription;

    constructor(private routeParams: ActivatedRoute,
            private postsService: PostsService,
            private titleService: Title
            ) {
            this.titleService.setTitle("Tag -- Ivan Vladimir" );
        }

    ngOnInit(){
        this.routeParams.params.subscribe( params => { 
            this.page = params['page'];
            this.tag = params['tag'];
            this.titleService.setTitle(this.tag+" tag -- Ivan Vladimir" );
        this.postsService.getPosts().then(posts => {
            this.posts = [];
            for ( let post in posts['posts'] ) {
                post = posts['posts'][post];
                if ( post['tags'] && post['tags'].indexOf(this.tag) >= 0 ) {
                    this.posts.push(post);
                }
            } 
            this.last = (this.posts.length / 10 + 1) | 0;
            this.pages = Array.apply(null, {length: this.last}).map(Number.call, Number);
        });
    
    });
    }
}

