"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class FilterPredicate {
    constructor() {
        this.evenFilter = (value) => value % 2 === 0;
        this.eligibleCandidate = (value) => value.includes('JavaScript' || 'C++');
    }
    filter() {
        console.log(String.fromCharCode(47));
        const observable = rxjs_1.Observable.from([1, 24, 3, 4, 5, 6]);
        observable.filter(this.evenFilter).subscribe(console.log);
    }
    filterObject() {
        const candidates = [
            { name: 'Brendan Eich', experience: 'JavaScript Inventor' },
            { name: 'Emmet Brown', experience: 'Historian' },
            { name: 'George Lucas', experience: 'Sci-fi writer' },
            { name: 'Alberto Perez', experience: 'Zumba Instructor' },
            { name: 'Bjarne Stroustrup', experience: 'C++ Developer' },
        ];
        const observable = rxjs_1.Observable.from(candidates);
        observable.pluck('experience')
            .filter(this.eligibleCandidate)
            .subscribe(console.log);
    }
}
exports.FilterPredicate = FilterPredicate;
//# sourceMappingURL=filter-predicate.js.map