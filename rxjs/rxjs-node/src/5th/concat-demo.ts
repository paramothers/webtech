import { Observable } from 'rxjs';

export class ConcatDemo {
    constructor() { }

    /**
     * simple
     */
    public simple() {

        const source1$ = Observable.range(1, 3)
            .delay(3000);

        const source2$ = Observable.of('a', 'b', 'c');

        const result = Observable.concat(source1$, source2$);
        result.subscribe(console.log);

    }
}