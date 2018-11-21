import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<any>, field: string, serachTerm: string): any {

    if (!field) { return []; }
    if (serachTerm == null) { return [...value]; }
    return value.filter(item => item[field] === serachTerm);

  }

}
