"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class MergeDemo {
    simple() {
        const source1$ = rxjs_1.Observable.interval(2000)
            .map(x => `Source 1 ${x}`)
            .take(3);
        const source2$ = rxjs_1.Observable.interval(1000)
            .map(y => `Source 2 ${y}`)
            .take(3);
        const source4 = rxjs_1.Observable.concat(source1$, source2$)
            .subscribe(console.log);
    }
}
exports.MergeDemo = MergeDemo;
//# sourceMappingURL=merge-demo.js.map