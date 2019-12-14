import {connect} from "react-redux";
import {endEditing} from "../actionCreators/stateActionsCreators";
import {saveProduct, saveSupplier} from "../actionCreators/modelActionCreators";
import {PRODUCTS, SUPPLIERS} from "../dataTypes";
import {saveAndEndEditing} from "../actionCreators/multiActionCreators";
import {withRouter} from "react-router-dom";

export const EditorConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData, ownProps) => {

        const mode = ownProps.match.params.mode;
        const id = Number(ownProps.match.params.id);
        return {
            editing: mode === "edit" || mode === "create",
            product : (storeData.modelData[PRODUCTS].find(p => p.id === id)) || {},
            supplier: (storeData.modelData[SUPPLIERS].find(s => s => s.id === id)) || {}
        }
    }

    const mapStateToProps2 = (storeData) => ({

        editing: storeData.stateData.editing && storeData.stateData.selectedType === dataType,
        product: (storeData.modelData[PRODUCTS].find(p => p.id === storeData.stateData.selectedId)) || {},
        supplier: (storeData.modelData[SUPPLIERS].find(s => s.id === storeData.stateData.selectedId)) || {}
    })

    const mapDispatchToProps = dispatch => ({

        // cancelCallback: () => dispatch(endEditing()),
        saveCallback: data =>{
           /*  dispatch(( dataType === PRODUCTS ? saveProduct: saveSupplier)(data));
            dispatch(endEditing()); */
            saveAndEndEditing(data, dataType)
        } 
    })

    const mergeProps = (dataProps, functionProps, ownProps) => {

        let routedDispatchers = {

            cancelCallback: () => ownProps.history.push(`/${dataType}`),
            saveCallback: (data) => {
                functionProps.saveCallback(data);
                ownProps.history.push(`/${dataType}`);
            }
        }
        return Object.assign({}, dataProps, routedDispatchers, ownProps);
    }

    return withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(presentationComponent));
}
