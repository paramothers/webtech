import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertAge'
})
export class ConvertAgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
