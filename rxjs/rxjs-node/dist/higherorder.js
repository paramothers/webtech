"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const even = (num) => num % 2 === 0;
const square = (num) => num * num;
const add = (a, b) => a + b;
function BufferedIteroator(bufferSize = 2, arr) {
    this[Symbol.iterator] = function () {
        let nextIndex = 0;
        return {
            next: () => {
                if (nextIndex >= arr.lenth) {
                    return { done: true };
                }
                else {
                    const buffer = new Array(bufferSize);
                    for (let i = 0; i < bufferSize; i++) {
                        buffer[i] = arr[nextIndex++];
                    }
                    return { value: buffer, done: false };
                }
            },
        };
    };
}
class Higherorder {
    demoHigherOrder() {
        const array = [1, 2, 3, 4, 26, 6, 7, 8, 9, 10];
        const restul = array.filter(even).map(square).reduce(add);
        console.log('Done ', restul);
    }
    streamDemo() {
        //Stream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
}
exports.Higherorder = Higherorder;
//# sourceMappingURL=higherorder.js.map