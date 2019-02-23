import {Observable} from 'rxjs';

export class FilterPredicate {

    public filter(): void {

        console.log(String.fromCharCode(47));
        const observable: Observable<number> = Observable.from([1, 24, 3, 4, 5, 6]);

        observable.filter(this.evenFilter).subscribe(console.log);
    }

    public filterObject(): void {

        const candidates = [

            {name: 'Brendan Eich', experience: 'JavaScript Inventor'},
            {name: 'Emmet Brown', experience: 'Historian'},
            {name: 'George Lucas', experience: 'Sci-fi writer'},
            {name: 'Alberto Perez', experience: 'Zumba Instructor'},
            {name: 'Bjarne Stroustrup', experience: 'C++ Developer'},
        ];

        const observable: Observable<any> = Observable.from(candidates);

        observable.pluck('experience')
            .filter(this.eligibleCandidate)
            .subscribe(console.log);

    }

    private evenFilter = (value: number) => value % 2 === 0;
    private eligibleCandidate = (value: string) => value.includes('JavaScript' || 'C++');
}
