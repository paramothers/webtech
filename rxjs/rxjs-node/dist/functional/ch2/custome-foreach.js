"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomeForeach {
    constructor() {
        //it is higher order function
        this.forEach = (array, fun) => {
            for (let i = 0; i < array.length; i++) {
                fun(array[i]);
            }
        };
        this.print = (value) => {
            console.log(value);
        };
        this.crazy = () => {
            return String;
        };
    }
    simple() {
        const simpleArray = [2, 3, 46, 5, 5];
        this.forEach(simpleArray, this.print);
        console.log(typeof this.print);
    }
    testStringFunction() {
        const builtInString = this.crazy();
        console.log(builtInString('AAAAA'));
        console.log(this.crazy()('BBBB'));
    }
}
exports.CustomeForeach = CustomeForeach;
//# sourceMappingURL=custome-foreach.js.map