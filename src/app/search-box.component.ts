import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'my-search-box',
    template: `<div class="large-12 columns">
        <input placeholder="abc" [ngModel]="term" type="text" (ngModelChange)="update.emit($event)">
    </div>`
})

export class SearchBoxComponent implements OnInit {
    @Output() update = new EventEmitter();
    public term: String;

    ngOnInit() {
        this.update.emit('');
    }
}
