import {Observable} from 'rxjs';
import {PromiseDemo} from './2nd/custom-promise';
import {InifiniteObservable} from './2nd/observable-infinite';
import {FilterPredicate} from './3rd/filter-predicate';
import {MapOperator} from './3rd/map-simple';
import {ReduceAccumator} from './3rd/reduce-accumator';
import {MyTimer} from './4th/my-timer';
import {TimeoutOperator} from './4th/timeout-operator';
import {MergeDemo} from './5th/merge-demo';
import {CustomeForeach} from './functional/ch2/custome-foreach';
import {Higherorder} from './higherorder';
import {Possiblities} from './SingleValue';
import { ConcatDemo } from './5th/concat-demo';
import { FlatternOperator } from './5th/flattern-oper';

const observable = Observable.create((observer: any) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');
});
observable.subscribe(
    (x: any) => logItem(x),
    (error: any) => logItem('Error: ' + error),
    () => logItem('Completed'),
);

function logItem(val: any) {

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

let flatternOperator = new FlatternOperator();
flatternOperator.arraySample();
