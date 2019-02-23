import {Observable} from 'rxjs';

function exclude(predicatePureFunction) {

    return Observable.create(excludeSubscriber => {
        let sourceObservable = this; // previous observable

        return sourceObservable.subscribe(value => {

                try {

                    if (!predicatePureFunction(value)) {

                        excludeSubscriber.next(value);
                    }
                } catch (e) {
                    excludeSubscriber.error(e);
                }
            },
            err => excludeSubscriber.error(err),
            () => excludeSubscriber.complete());
    });
}

Observable.prototype.exclude = exclude;

export class CustomOperator {

}
