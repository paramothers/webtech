import {PRODUCTS} from "../dataTypes";
import {saveProduct, saveSupplier} from "./modelActionCreators";
import {endEditing} from "./stateActionsCreators";

export const saveAndEndEditing = (data, dataType) =>
[dataType === PRODUCTS ? saveProduct(data) : saveSupplier(data), endEditing()];