export function asyncEnhancer(delay) {

    return function(createStoreFunction){
        return function(...args){
            const store = createStoreFunction(...args);
            return {
                ...store,
                dispatchAync: (action) => new Promise( (resolve, reject) => {
                    setTimeout( () => {
                        store.dispatch(action);
                        resolve();
                    }, delay)
                })
            }
        }
    }
}