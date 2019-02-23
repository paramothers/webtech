"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ReduceAccumator {
    constructor() {
        this.accumate = (accumalatedSum, currentValue) => {
            return accumalatedSum + currentValue;
        };
        this.accumlateCandiate = (acc, current) => {
            acc.push(current);
            return acc;
        };
    }
    accumateNumber() {
        rxjs_1.Observable.from([1, 2, 3, 4, 57, 5])
            .reduce(this.accumate, 0)
            .subscribe(console.log);
    }
    accumalateObjects() {
        const candidates = [
            { name: 'Brendan Eich', experience: 'JavaScript Inventor' },
            { name: 'Emmet Brown', experience: 'Historian' },
            { name: 'George Lucas', experience: 'Sci-fi writer' },
            { name: 'Alberto Perez', experience: 'Zumba Instructor' },
            { name: 'Bjarne Stroustrup', experience: 'C++ Developer' },
        ];
        rxjs_1.Observable.from(candidates)
            .pluck('experience')
            .filter((experience) => {
            return experience.includes('JavaScript') || experience.includes('C++');
        }).reduce(this.accumlateCandiate, [])
            .subscribe(console.log);
    }
    scanObjects() {
        const candidates = [
            { name: 'Brendan Eich', experience: 'JavaScript Inventor' },
            { name: 'Emmet Brown', experience: 'Historian' },
            { name: 'George Lucas', experience: 'Sci-fi writer' },
            { name: 'Alberto Perez', experience: 'Zumba Instructor' },
            { name: 'Bjarne Stroustrup', experience: 'C++ Developer' },
        ];
        rxjs_1.Observable.from(candidates)
            .pluck('experience')
            .filter((experience) => {
            return experience.includes('JavaScript') || experience.includes('C++');
        }).scan(this.accumlateCandiate, [])
            .subscribe(console.log);
    }
}
exports.ReduceAccumator = ReduceAccumator;
//# sourceMappingURL=reduce-accumator.js.map