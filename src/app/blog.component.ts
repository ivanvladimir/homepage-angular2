import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './posts.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'my-post',
    templateUrl: 'templates/blog.html',
    providers: [PostsService]
})

export class BlogComponent {
    public page;
    public posts = [];
    public last  = 0;
    public pages = [];
    subscription: Subscription;

    constructor(private routeParams: ActivatedRoute,
        private postsService: PostsService) {

        routeParams.params.subscribe( params => { this.page = params['page'] });

        this.postsService.getPosts().then(posts => {
            this.posts = posts['posts'];
            this.last  = ( this.posts.length / 10 + 1) | 0;
            this.pages = Array.apply(null, {length: this.last}).map(Number.call, Number);}
        );
    }
}

