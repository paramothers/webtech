
const myCustomObservable = (events: Array) => {

    const INTERVAL = 1 * 1000;
    let schedularId: any;

    return {
        subscribe: (observer: any) => {

            schedularId = setInterval(() => {
                if (events.lenth === 0) {

                    observer.complete();
                    clearInterval(schedularId);
                    schedularId = undefined;
                } else {
                    observer.next(events.shift());
                }
            }, INTERVAL);

           return {
               unsubscribe: () => {

                   if (schedularId) {
                       clearInterval(schedularId);
                   }
               }
           }
        },

    };
};
