import {Observable} from 'rxjs';

export class Possiblities {

    public singleValueSync(): void {
        Observable.of(15).subscribe(console.log);
    }

    public mulipleValueSync(): void {
        Observable.from('15').subscribe(console.log);
    }

    public mapValueSync(): void {

        const map = new Map<string, string>();
        map.set('Name', 'Param');
        map.set('Name2', 'Para2m');

    }

}
