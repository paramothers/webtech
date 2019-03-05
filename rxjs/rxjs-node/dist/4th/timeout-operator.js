"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class TimeoutOperator {
    constructor() {
        this.randomNumber = () => {
            Math.floor(Math.random() * 100);
        };
    }
    simple() {
        const observable = rxjs_1.Observable.create((observer) => {
            const timoutId = setTimeout(() => {
                observer.next();
                observer.complete();
            }, 1000);
            return () => clearInterval(timoutId);
        });
        const subscription = observable.subscribe(() => {
            console.log('custome done');
            subscription.unsubscribe();
        });
    }
    builtin() {
        rxjs_1.Observable.timer(1000).subscribe(() => console.log('built in done'));
    }
}
exports.TimeoutOperator = TimeoutOperator;
//# sourceMappingURL=timeout-operator.js.map