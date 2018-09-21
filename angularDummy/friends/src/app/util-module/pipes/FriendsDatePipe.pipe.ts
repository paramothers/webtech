import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'friendsdatepipe'
})
export class FriendsDatePipePipe implements PipeTransform {

  transform(dateInMillis: string): any {

    if (dateInMillis === '0' || dateInMillis === '-1') {
      return 'Invalid Date';
    }
    return moment(dateInMillis, 'x').format('MM/DD/YY');
  }

}
