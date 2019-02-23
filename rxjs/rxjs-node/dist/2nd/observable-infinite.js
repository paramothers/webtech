"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class InifiniteObservable {
    initite() {
        const observalbe = rxjs_1.Observable.create((observer) => {
            let i = 0;
            const intervalId = setInterval(() => {
                observer.next(i++);
            }, 500);
            return () => {
                console.log('Unsbscription called ');
                clearInterval(intervalId);
            };
        });
        const subscription = observalbe.subscribe((value) => {
            console.log(value);
            if (value > 10) {
                subscription.unsubscribe();
            }
        });
    }
}
exports.InifiniteObservable = InifiniteObservable;
//# sourceMappingURL=observable-infinite.js.map