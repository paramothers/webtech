"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_util_1 = require("../util/constant-util");
class PromiseDemo {
    static simple() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(68796);
            }, constant_util_1.ConstantUtil.WATING_PERIOD);
        });
        promise.then((val) => console.log('resolved value ', val));
    }
}
exports.PromiseDemo = PromiseDemo;
//# sourceMappingURL=custom-promise.js.map