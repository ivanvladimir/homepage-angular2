import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myKeyValue'
})

export class KeyValue implements PipeTransform {
    transform( values, key, val): any {
        if ( !key || !val ) {
            return [];
        }
        let values_ = [];
        for ( let id_ in values ) {
            let item = values[id_];
            if ( val === item[key] ) {
                values_.push(item);
            }
        }
        return values_;
    }
}
