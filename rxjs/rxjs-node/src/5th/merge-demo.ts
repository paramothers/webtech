import {Observable} from 'rxjs';

export class MergeDemo {

    public simple(): void {

        const source1$ = Observable.interval(2000)
            .map( x => `Source 1 ${x}`)
            .take(3);

        const source2$ = Observable.interval(1000)
            .map(y => `Source 2 ${y}`)
            .take(3);

        const source4 = Observable.concat(source1$, source2$)
            .subscribe(console.log);

    }
}
