"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class Possiblities {
    singleValueSync() {
        rxjs_1.Observable.of(15).subscribe(console.log);
    }
    mulipleValueSync() {
        rxjs_1.Observable.from('15').subscribe(console.log);
    }
    mapValueSync() {
        const map = new Map();
        map.set('Name', 'Param');
        map.set('Name2', 'Para2m');
    }
}
exports.Possiblities = Possiblities;
//# sourceMappingURL=SingleValue.js.map