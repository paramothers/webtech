import { Pipe, PipeTransform } from '@angular/core';
import { WorkoutLogEntry } from '../core/workout-history-tracker.service';

@Pipe({
  name: 'orederBy'
})
export class OrederByPipe implements PipeTransform {

  transform(value: Array<WorkoutLogEntry>, field: string): any {

    if (value == null || value.length <= 1) {
      return value;
    }

    if (field.startsWith('-')) {

      field = field.substring(1);
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => b[field] - a[field]);

    } else {
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => a[field] - b[field]);
    }
  }

}
