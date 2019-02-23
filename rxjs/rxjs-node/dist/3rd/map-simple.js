"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class MapOperator {
    constructor() {
        this.percentage = (x) => x + (x * 0.6);
    }
    demo() {
        rxjs_1.Observable.of(10.0, 20.0, 30.0, 40.0)
            .map(this.percentage)
            .subscribe(console.log);
    }
}
exports.MapOperator = MapOperator;
//# sourceMappingURL=map-simple.js.map