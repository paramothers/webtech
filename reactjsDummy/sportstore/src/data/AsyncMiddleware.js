
const isPromise = (payload) => (typeof (payload) === "object" || typeof (payload) === "function") && typeof (payload.then) === "function";

export const asyncActions = () => (next) => (action) => {

    if(isPromise(action.payload)){
        console.log('for promise');
        action.payload.then( result => { 
            console.log('result :::',result);
            next({...action, payload:result})
        });
    }else{
        console.log('NOT for promise');
        next(action)
    }
}