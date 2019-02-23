"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function exclude(predicatePureFunction) {
    return rxjs_1.Observable.create(excludeSubscriber => {
        let sourceObservable = this; // previous observable
        return sourceObservable.subscribe(value => {
            try {
                if (!predicatePureFunction(value)) {
                    excludeSubscriber.next(value);
                }
            }
            catch (e) {
                excludeSubscriber.error(e);
            }
        }, err => excludeSubscriber.error(err), () => excludeSubscriber.complete());
    });
}
rxjs_1.Observable.prototype.exclude = exclude;
class CustomOperator {
}
exports.CustomOperator = CustomOperator;
//# sourceMappingURL=custom-operator.js.map