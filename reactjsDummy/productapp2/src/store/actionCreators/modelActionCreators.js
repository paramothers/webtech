import {PRODUCTS, SUPPLIERS} from "../dataTypes";
import  {STORE, UPDATE, DELETE} from "../modelActionTypes";

let idCounter = 100;
export const saveProduct = (product) => {

    return createSaveEvent(PRODUCTS, product);
}

export const saveSupplier = (supplier) => {
    return createSaveEvent(SUPPLIERS, supplier);
}

export const deleteProduct = (product) => ({
    type:DELETE,
    dataType: PRODUCTS,
    payload: product.id
})

export const deleteSupplier = (supplier) => ({
    type: DELETE,
    dataType: SUPPLIERS,
    payload: supplier.id
})

const createSaveEvent = (dataType, payload)  => {

    if(!payload.id){
        return {
            type: STORE,
            dateType: dataType,
            payload: {...payload, id: idCounter++}
        }
    }else {
        return {
            type: UPDATE,
            dataType: dataType,
            payload: payload
        }
    }
}