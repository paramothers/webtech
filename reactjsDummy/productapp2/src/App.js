import React, { Component } from "react";
import "./App.css";
// import ProductsAndSuplliers from './common/ProductsAndSuppliers';
import { Provider } from "react-redux";
import dataStore, { deleteProduct } from "./store";
// import { Selector } from "./common/Selector";
import {Selector} from "./routing/SelectorRouting"
import { ProductDisplay } from "./product/ProductDisplay";
import { SupplierDisplay } from "./supplier/SupplierDisplay";
import { StoreAccess } from "./store/StoreAccess";

import {CustomConnector, CustomConnectorProvider} from "./store/connectors/CustomConnector";
import {startEditingProduct} from "./store/actionCreators/stateActionsCreators";
import {ProductTable} from "./product/ProductTable";

const selectors = {
  products: (store) => store.modelData.products
}

const dispatchers = {

  editCallback: startEditingProduct,
  deleteCallback: deleteProduct
}

export default class App extends Component {

  render(){
    return <Provider store={dataStore}>
      <Selector>
        <ProductDisplay  name="Products" />
        <SupplierDisplay name="Suppliers" />
      </Selector>
    </Provider>
  }


  render2() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <StoreAccess store={dataStore} />
          </div>
          <div className="col">
            <Provider store={dataStore}>
              <Selector>
                <ProductDisplay name="Products" />
                <SupplierDisplay name="Suppliers" />
              </Selector>
            </Provider>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <CustomConnectorProvider dataStore={dataStore}>
                 <CustomConnector selectors={selectors} dispatchers={dispatchers}>
                   <ProductTable />
                 </CustomConnector>
              </CustomConnectorProvider>
          </div>
        </div>
      </div>
    );
  }
}
