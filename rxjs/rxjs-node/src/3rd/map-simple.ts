import {Observable} from 'rxjs';

export class MapOperator {

    public demo(): void {

         Observable.of(10.0, 20.0, 30.0, 40.0)
            .map(this.percentage)
            .subscribe(console.log);
    }

    private percentage = (x: number) => x + (x * 0.6);
}
