"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ConcatDemo {
    constructor() { }
    /**
     * simple
     */
    simple() {
        const source1$ = rxjs_1.Observable.range(1, 3)
            .delay(3000);
        const source2$ = rxjs_1.Observable.of('a', 'b', 'c');
        const result = rxjs_1.Observable.concat(source1$, source2$);
        result.subscribe(console.log);
    }
}
exports.ConcatDemo = ConcatDemo;
//# sourceMappingURL=concat-demo.js.map