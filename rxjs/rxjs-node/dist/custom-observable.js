const myCustomObservable = (events) => {
    const INTERVAL = 1 * 1000;
    let schedularId;
    return {
        subscribe: (observer) => {
            schedularId = setInterval(() => {
                if (events.lenth === 0) {
                    observer.complete();
                    clearInterval(schedularId);
                    schedularId = undefined;
                }
                else {
                    observer.next(events.shift());
                }
            }, INTERVAL);
            return {
                unsubscribe: () => {
                    if (schedularId) {
                        clearInterval(schedularId);
                    }
                }
            };
        },
    };
};
//# sourceMappingURL=custom-observable.js.map