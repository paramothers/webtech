import {Observable} from 'rxjs';

export class ReduceAccumator {

    public accumateNumber(): void {

        Observable.from([1, 2, 3, 4, 57, 5])
            .reduce(this.accumate, 0)
            .subscribe(console.log);
    }

    public accumalateObjects(): void {

        const candidates = [

            {name: 'Brendan Eich', experience: 'JavaScript Inventor'},
            {name: 'Emmet Brown', experience: 'Historian'},
            {name: 'George Lucas', experience: 'Sci-fi writer'},
            {name: 'Alberto Perez', experience: 'Zumba Instructor'},
            {name: 'Bjarne Stroustrup', experience: 'C++ Developer'},
        ];

        Observable.from(candidates)
            .pluck('experience')
            .filter((experience: string) => {
                    return experience.includes('JavaScript') || experience.includes('C++');
                },
            ).reduce(this.accumlateCandiate, [])
            .subscribe(console.log);

    }

    public scanObjects(): void {

        const candidates = [

            {name: 'Brendan Eich', experience: 'JavaScript Inventor'},
            {name: 'Emmet Brown', experience: 'Historian'},
            {name: 'George Lucas', experience: 'Sci-fi writer'},
            {name: 'Alberto Perez', experience: 'Zumba Instructor'},
            {name: 'Bjarne Stroustrup', experience: 'C++ Developer'},
        ];

        Observable.from(candidates)
            .pluck('experience')
            .filter((experience: string) => {
                    return experience.includes('JavaScript') || experience.includes('C++');
                },
            ).scan(this.accumlateCandiate, [])
            .subscribe(console.log);

    }

    private accumate = (accumalatedSum: number, currentValue: number) => {
        return accumalatedSum + currentValue;
    };

    private accumlateCandiate = (acc: any, current: string) => {
        acc.push(current);
        return acc;
    };
}
