import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private dataUrl = 'json/';
    private postUrl = 'json/post/';
    private pageUrl = 'json/page/';
    private headerUrl = 'json/header/';
    constructor(private http: Http){}

    getJSON (file: String) {
        return this.http.get(this.dataUrl + file)
                    .toPromise()
                    .then(request => <string[]> request.json())
                    .catch(this.handleError);
    }

    getHeader (file: String) {
        return this.http.get(this.headerUrl + file)
                    .toPromise()
                    .then(request => <string[]> request.json())
                    .catch(this.handleError);
    }



    getPost (file: String) {
        return this.http.get(this.postUrl + file + '.md')
                    .toPromise()
                    .then(request => <string> request.text())
                    .catch(this.handleError);
    }


    getPage (file: String) {
        return this.http.get(this.pageUrl + file + '.md')
                    .toPromise()
                    .then(request => <string> request.text())
                    .catch(this.handleError);
    }


    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
  }
}
