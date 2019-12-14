import {initialData} from "../initialData";
export const STORE_RESET ="store_clear";
export const resetStore = () => ({type:STORE_RESET});

export function customReducerEnhancer(originalReducer){

    let initialState = null;
    return (storeData, action) => {
        console.log("store data and action  ",action);
        if(action.type === STORE_RESET && initialData !== null){
            return initialState;
        }else{
            console.log("orginal reducer has to be called ");
            const result = originalReducer(storeData, action);
            if(initialState == null){
                initialState = result;
            }
            return result;
        }
    }
}