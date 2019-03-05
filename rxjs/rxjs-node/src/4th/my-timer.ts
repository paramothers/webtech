import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class MyTimer {

    public progationProblem(): void {

        Observable.from([1, 2, 4, 5, 5, 6])
            .do(x => console.log(`Emitted ${x}`))
            .delay(3000)
            .subscribe(x => console.log(`Recevied ${x}`));
    }

    public second(): void {
        Observable.timer(1000)
            .delay(2000)
            .timeInterval()
            .map(int => Math.floor(int.interval / 1000))
            .subscribe(seconds => console.log(`${seconds} seconds`));
    }

    public simple(): void {

        Observable.interval(2000)
            .timeInterval()
            .skip(1)
            .take(5)
            .do(int => console.log(`Checking every ${int.interval} milliseconds`))
            .map(int => {new Money('USD', this.randomNumber())})
            .subscribe(price => {
                console.log(price);
            });
    }

    private randomNumber = () => {
        Math.floor(Math.random() * 100);
    };
}

const Money = function(current, value) {

    return {
        value: function() {
            return value;
        },
        currency: function() {
            return current;
        },
        toString: function() {

            return `${current}-${value}`;
        }
    };
};
