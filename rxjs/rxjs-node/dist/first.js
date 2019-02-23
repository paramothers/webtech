"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const reduce_accumator_1 = require("./3rd/reduce-accumator");
const custome_foreach_1 = require("./functional/ch2/custome-foreach");
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
const customForEach = new custome_foreach_1.CustomeForeach();
// customForEach.simple();
customForEach.testStringFunction();
const reduceAccumator = new reduce_accumator_1.ReduceAccumator();
reduceAccumator.scanObjects();
//# sourceMappingURL=first.js.map