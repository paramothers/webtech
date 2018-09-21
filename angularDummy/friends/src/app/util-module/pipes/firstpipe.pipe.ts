import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstpipe'
})
export class FirstpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
