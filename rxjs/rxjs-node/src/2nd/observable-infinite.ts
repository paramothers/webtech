import {Observable} from 'rxjs';

export class InifiniteObservable {

    public initite(): void {

        const observalbe: Observable<number> = Observable.create((observer) => {

            let i = 0;
            const intervalId = setInterval(() => {
                observer.next(i++);
            }, 500);

            return () => {
                console.log('Unsbscription called ');
                clearInterval(intervalId);
            };
        });

        const subscription = observalbe.subscribe((value: number) => {

            console.log(value);
            if (value > 10) {

                subscription.unsubscribe();
            }
        });
    }

}
