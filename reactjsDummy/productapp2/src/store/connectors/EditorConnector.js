import {connect} from "react-redux";
import {endEditing} from "../actionCreators/stateActionsCreators";
import {saveProduct, saveSupplier} from "../actionCreators/modelActionCreators";
import {PRODUCTS, SUPPLIERS} from "../dataTypes";
import {saveAndEndEditing} from "../actionCreators/multiActionCreators";

export const EditorConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData) => ({

        editing: storeData.stateData.editing && storeData.stateData.selectedType === dataType,
        product: (storeData.modelData[PRODUCTS].find(p => p.id === storeData.stateData.selectedId)) || {},
        supplier: (storeData.modelData[SUPPLIERS].find(s => s.id === storeData.stateData.selectedId)) || {}
    })

    const mapDispatchToProps = dispatch => ({

        cancelCallback: () => dispatch(endEditing()),
        saveCallback: data =>{
           /*  dispatch(( dataType === PRODUCTS ? saveProduct: saveSupplier)(data));
            dispatch(endEditing()); */
            saveAndEndEditing(data, dataType)
        } 
    })

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}
