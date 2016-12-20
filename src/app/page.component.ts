import { Component, AfterViewChecked, ViewChild, OnInit, NgZone, OnDestroy, Inject} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DataService} from './data.service';
import { RendermdService} from './rendermd.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


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
            private router: Router,
            private _sanitizer: DomSanitizer,
            private dataService: DataService,
            private ngZone: NgZone,
            private rendermdService: RendermdService) {
       };

    ngOnInit(){
       this.routeParams.params.subscribe( params => { 
            this.path = params['path'];
            this.autorender = require('exports?$=renderMathInElement!./auto-render.js');
            this.dataService.getHeader(this.path + '.json').then(header => {this.header = header ;
            if(this.header['library']){
                    for (var elem in this.header['library']) {
                        this.loadScript(this.header['library'][elem]);
            }}
            this.dataService.getPage(this.path).then(text => this.text = this.rendermdService.render(text));
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

