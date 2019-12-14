export function multiActions({dispatch, getState}){
    console.log("multi action");
    return function receiveNext(next){
        console.log("receive next");
        return function processAction(action){
            console.log("process action");
            if(Array.isArray(action)) {
                action.forEach(a => next(a));
            }else{
                next(action);
            }
        }
    }
}