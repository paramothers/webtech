import {Observable} from 'rxjs';

const observable: Observable<number> = Observable.create(observer => {

        const OFFSET = 3000;
        const SPEED = 50;

        let val = 0;

        const progressFunction = () => {

            if (++val < 100) {
                observer.next(val);
                setTimeout(progressFunction, SPEED);
            } else {
                observer.complete();
            }

        };

        setTimeout(progressFunction, OFFSET);
    });
