import {Observable} from 'rxjs';

const source$: Observable<string> = Observable.create(
    observer => {

        observer.next('2222222222222222');
        observer.next('33333333');
        observer.next('55555555555');
        observer.complete();
    },
);

const subscription = source$.subscribe(console.log);
