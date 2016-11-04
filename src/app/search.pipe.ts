import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'mySearch'
})

export class SearchPipe implements PipeTransform {
    transform( value, args ) {
        if ( args && args.length > 0 )  {
            return value.filter((item) =>
                item.title.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
                item.authors_latex.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
                item.book_title.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
                item.year.toString().indexOf(args) > -1
            );
        } else {
            return value.filter((item) => true);
        }
    }
}
