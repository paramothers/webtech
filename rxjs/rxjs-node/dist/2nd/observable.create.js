"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const source$ = rxjs_1.Observable.create(observer => {
    observer.next('2222222222222222');
    observer.next('33333333');
    observer.next('55555555555');
    observer.complete();
});
const subscription = source$.subscribe(console.log);
//# sourceMappingURL=observable.create.js.map