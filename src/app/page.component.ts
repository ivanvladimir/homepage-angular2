import {Component, AfterViewChecked, ViewChild, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from './data.service';
import {RendermdService} from './rendermd.service';
import {SanitizeHtmlPipe} from './sanitize.pipe';

@Component({
    selector: 'my-page',
    providers: [DataService, RendermdService],
    templateUrl: 'templates/page.html'
})

export class PageComponent implements AfterViewChecked, OnInit {
    public text;
    public header = {};
    public path: string;
    public autorender;
    @ViewChild('homepage_content') homepage_content;

    constructor(private routeParams: ActivatedRoute,
            private dataService: DataService,
            private rendermdService: RendermdService) {};

    ngOnInit(){
        this.routeParams.params.subscribe( params => { 
            this.path = params['path'];
            this.autorender = require('exports?$=renderMathInElement!./auto-render.js');
            this.dataService.getHeader(this.path + '.json').then(header => this.header = header );
            this.dataService.getPage(this.path).then(text => this.text = this.rendermdService.render(text));
        });
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

