import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostsService  {
    private postsUrl = '/json/posts.json';

    constructor( private http: Http ) {
    }

    getJSON () {
        let posts = this.http.get(this.postsUrl)
                    .toPromise()
                    .then(request => <any> request.json())
                    .catch(this.handleError);
        return posts;
    }

    getPosts () {
        return this.getJSON();
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}
