import React, { Component } from "react";
import { ProductTable } from "./ProductTable";
import { ProductEditor } from "./ProductEditor";
import { connect } from "react-redux";
// import { saveProduct, deleteProduct } from "../store";

import { EditorConnector } from "../store/connectors/EditorConnector";
import { PRODUCTS } from "../store/dataTypes";
import { TableConnector } from "../store/connectors/TableConnector";
import { startCreatingProduct } from "../store/actionCreators/stateActionsCreators";

const ConnectedEditor = EditorConnector(PRODUCTS, ProductEditor);
const ConnectedTable = TableConnector(PRODUCTS, ProductTable);

const mapStateToProps = storeData => ({
  selected:
    storeData.modelData.products.find(
      item => item.id === storeData.stateData.selectedId
    ) || {},
  editing: storeData.stateData.editing
});

const mapDispatchToProps = {
  createProduct: startCreatingProduct
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const ProductDisplay = connectFunction(
  class extends Component {
    /* constructor(props) {
      super(props);
      this.state = {
        showEditor: false,
        selectedProduct: null
      };
    }

    startEditing = product => {
      this.setState({ showEditor: true, selectedProduct: product });
    };
    createProduct = () => {
      this.setState({ showEditor: true, selectedProduct: {} });
    };

    cancelEditing = () => {
      this.setState({ showEditor: false, selectedProduct: null });
    };

    saveProduct = product => {
      this.props.saveCallback(product);
      this.setState({ showEditor: false, selectedProduct: null });
    }; */

    render() {
      if (this.props.editing) {
        return (
          <ConnectedEditor
            key={this.props.selected.id || -1}           
          />
        );
      } else {
        return (
          <div className="m-2">
            <ConnectedTable />
            <div className="text-center">
              <button className="btn btn-primary m-1" 
              onClick={this.props.createProduct}>
                Create Product
              </button>
            </div>
          </div>
        );
      }
    }
  }
);
