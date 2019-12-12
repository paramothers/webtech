import React, { Component } from "react";
import { Selector } from "./Selector";
import { ProductDisplay } from "./product/ProductDisplay";
import { SupplierDisplay } from "./supplier/SupplierDisplay";

export default class ProductsAndSuplliers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Kayak", category: "Watersports", price: 275 },
        { id: 2, name: "Lifejacket", category: "Watersports", price: 48.95 },
        { id: 3, name: "Soccer Ball", category: "Soccer", price: 19.5 }
      ],
      suppliers: [
        { id: 1, name: "Surf Dudes", city: "San Jose", products: [1, 2] },
        { id: 2, name: "Field Supplies", city: "New York", products: [3] }
      ]
    };
    this.idCounter = 100;
  }

  deleteData = (collection, item) => {
      this.setState(state => state[collection] = state[collection].filter(stored => stored !== item.id))
  }

  saveData = (collection, item) => {
    if (item.id === "") {
      item.id = this.idCounter++;
      this.setState(
        state => (state[collection] = state[collection].concat(item))
      );
    } else {
      this.setState(
        state =>
          (state[collection] = state[collection].map(
            stored => stored.id === item.id ? item: stored
          ))
      );
    }
  }
  render(){
      return <div>
          <Selector>
              <ProductDisplay  name="Products"
              products={this.state.products}
              saveCallback={ p=> this.saveData("products", p)} 
              deleteCallback={ p => this.deleteDate("products",s)} />
            <SupplierDisplay name="Suppliers"
                suppliers={this.state.suppliers}
                saveCallback = { s => this.saveData("suppliers", s)}
                deleteCallback = { s => this.deleteData("suppliers",s)}
            />
          </Selector>
      </div>
  }
}
