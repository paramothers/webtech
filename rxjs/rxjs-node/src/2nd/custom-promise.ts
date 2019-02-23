import {ConstantUtil} from '../util/constant-util';

export class PromiseDemo {

    public static simple(): void {

        const promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(68796);
            }, ConstantUtil.WATING_PERIOD);
        });

        promise.then((val) => console.log('resolved value ',val));
    }

}


