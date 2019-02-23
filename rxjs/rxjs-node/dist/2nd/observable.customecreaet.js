"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observable = rxjs_1.Observable.create(observer => {
    const OFFSET = 3000;
    const SPEED = 50;
    let val = 0;
    const progressFunction = () => {
        if (++val < 100) {
            observer.next(val);
            setTimeout(progressFunction, SPEED);
        }
        else {
            observer.complete();
        }
    };
    setTimeout(progressFunction, OFFSET);
});
//# sourceMappingURL=observable.customecreaet.js.map