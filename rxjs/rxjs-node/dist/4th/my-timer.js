"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class MyTimer {
    constructor() {
        this.randomNumber = () => {
            Math.floor(Math.random() * 100);
        };
    }
    progationProblem() {
        rxjs_1.Observable.from([1, 2, 4, 5, 5, 6])
            .do(x => console.log(`Emitted ${x}`))
            .delay(3000)
            .subscribe(x => console.log(`Recevied ${x}`));
    }
    second() {
        rxjs_1.Observable.timer(1000)
            .delay(2000)
            .timeInterval()
            .map(int => Math.floor(int.interval / 1000))
            .subscribe(seconds => console.log(`${seconds} seconds`));
    }
    simple() {
        rxjs_1.Observable.interval(2000)
            .timeInterval()
            .skip(1)
            .take(5)
            .do(int => console.log(`Checking every ${int.interval} milliseconds`))
            .map(int => { new Money('USD', this.randomNumber()); })
            .subscribe(price => {
            console.log(price);
        });
    }
}
exports.MyTimer = MyTimer;
const Money = function (current, value) {
    return {
        value: function () {
            return value;
        },
        currency: function () {
            return current;
        },
        toString: function () {
            return `${current}-${value}`;
        }
    };
};
//# sourceMappingURL=my-timer.js.map