"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const flattern_oper_1 = require("./5th/flattern-oper");
const observable = rxjs_1.Observable.create((observer) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');
});
observable.subscribe((x) => logItem(x), (error) => logItem('Error: ' + error), () => logItem('Completed'));
function logItem(val) {
    // console.log('values ', val);
}
// const higherOrder: Higherorder = new Higherorder();
// higherOrder.demoHigherOrder();
// const possiblities: Possiblities = new Possiblities();
// possiblities.singleValueSync();
// possiblities.mulipleValueSync();
// possiblities.mapValueSync();
// possiblities.promiseAsync();
// const inifiniteObservable: InifiniteObservable = new InifiniteObservable();
// inifiniteObservable.initite();
// const mapoperato: MapOperator = new MapOperator();
// mapoperato.demo();
// const filterDemo = new FilterPredicate();
// filterDemo.filter();
// const filterObject = new FilterPredicate();
// filterObject.filterObject();
// const customForEach = new CustomeForeach();
// // customForEach.simple();
// customForEach.testStringFunction();
//
// const reduceAccumator = new ReduceAccumator();
// reduceAccumator.scanObjects();
// const timeoutOperator: TimeoutOperator = new TimeoutOperator();
// timeoutOperator.simple();
// timeoutOperator.builtin();
// const mytimer = new MyTimer();
// mytimer.progationProblem();
// let fileToTest = require('./javascript/simplefunction');
// fileToTest();
// let mergeDemo  = new MergeDemo();
// mergeDemo.simple();
// let concatDemo = new ConcatDemo();
// concatDemo.simple();
let flatternOperator = new flattern_oper_1.FlatternOperator();
flatternOperator.arraySample();
//# sourceMappingURL=first.js.map