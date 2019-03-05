"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class FlatternOperator {
    constructor() {
        this.twoSeconds$ = rxjs_1.Observable.interval(2000);
        this.fetchSymbolFunction = syumbol => this.twoSeconds$.mergeMap(() => requestQutoes(syumbol));
    }
    /**
     * name
     */
    flatternSample() {
        const array = [[1, 2], [3, 4], [6, 7]].reduce((a, b) => {
            return a.concat(b);
        }, []);
        console.log(array);
    }
    /**
     * arraySample
     */
    arraySample() {
        const arr = [1, 2, 4];
        arr.map(value => Array(value).fill(value));
        const temp = arr.map(value => Array(value).fill(value)).concatAll();
        console.log(temp);
    }
    /**
     * useMergeMap
     */
    useMergeMap() { }
}
exports.FlatternOperator = FlatternOperator;
//# sourceMappingURL=flattern-oper.js.map