import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertAge32'
})
export class ConvertAge32Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
