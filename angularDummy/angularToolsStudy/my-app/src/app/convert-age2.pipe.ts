import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertAge2'
})
export class ConvertAge2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
