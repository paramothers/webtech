import { Observable } from "rxjs";
import { ajaxGet } from "rxjs/observable/dom/AjaxObservable";


export class ForkJoinDemo {
    constructor() {
        
    }

    /**
     * name
     */
    public simpleForkJoin() {
        
        Observable.forkJoin(
            Observable.of(23),
            Observable.interval(1000).take(5)
        ).subscribe(console.log);
    }
}