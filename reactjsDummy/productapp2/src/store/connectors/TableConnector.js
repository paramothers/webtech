import { connect } from "react-redux";
import {
  startEditingProduct,
  startEditingSupplier
} from "../actionCreators/stateActionsCreators";
import {
  deleteProduct,
  deleteSupplier
} from "../actionCreators/modelActionCreators";
import { PRODUCTS, SUPPLIERS } from "../dataTypes";
import { withRouter } from "react-router-dom";
import { getData } from "../../webservices/RestMiddleware";
import { DataGetter } from "../../DataGetter";

export const TableConnector = (dataType, presentationComponent) => {
  const mapStateToProps = (storeData, ownProps) => {
    if (dataType === PRODUCTS) {
      return { products: storeData.modelData[PRODUCTS] };
    } else {
      return {
        suppliers: storeData.modelData[SUPPLIERS].map(supp => ({
          ...supp,
          products: supp.products
            .map(
              id =>
                storeData.modelData[PRODUCTS].find(p => p.id === Number(id)) ||
                id
            )
            .map(val => val.name || val)
        }))
      };
    }
  };

  const mergeProps = (dataProps, functionProps, ownProps) => {
    let routedDispatchers = {
      editCallback: target => {
        ownProps.history.push(`/${dataType}/edit/${target.id}`);
      },
      deleteCallback: functionProps.deleteCallback,
      getData: functionProps.getData
    };
    return Object.assign({}, dataProps, routedDispatchers, ownProps);
  };

  const mapStateToProps2 = (storeData, ownProps) => {
    if (!ownProps.needSuppliers) {
      if (dataType === PRODUCTS) {
        return { products: storeData.modelData[PRODUCTS] };
      } else {
        return { suppliers: storeData.modelData[SUPPLIERS] };
      }
    } else {
      return {
        suppliers: storeData.modelData[SUPPLIERS].map(supp => ({
          ...supp,
          products: supp.products
            .map(
              id =>
                storeData.modelData[PRODUCTS].find(p => p.id === Number(id)) ||
                id
            )
            .map(val => val.name || val)
        }))
      };
    }
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getData: type => dispatch(getData(type)),
      deleteCallback:
        dataType === PRODUCTS
          ? (...args) => dispatch(deleteProduct(...args))
          : (...args) => dispatch(deleteSupplier(...args))
    };
  };
  const mapDispatchToProps2 = {
    editCallback:
      dataType === PRODUCTS ? startEditingProduct : startEditingSupplier,
    deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier
  };

  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
      mergeProps
    )(DataGetter(dataType, presentationComponent))
  );
};
