import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myKeys'
})

export class KeysPipe implements PipeTransform {
    transform(value) {
        let keys = [];
        for ( let key in value ) {
            keys.push({key: key, value: value[key]});
        }
        return keys;
    }
}
