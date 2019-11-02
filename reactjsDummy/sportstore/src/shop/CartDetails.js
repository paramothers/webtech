import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CartDetailsRow} from './CartDetailsRow';

export class CartDetails extends Component {

    getLinkClasses = () => `btn btn-secondary m-1 ${this.props.cartItems === 0 ? "disabled": ""}`

    render() {
        return <div className="m-3">
           <h2 className="text-center">Your Cart</h2>
           <table className="table table-bordered table-striped">
             <thead>
              <tr>
                  <th>Quantity</th>
                  <th>Product</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">SubTotal</th>
                  <th />
              </tr>
             </thead>
             <tbody>
               <CartDetailsRow  cart={this.props.cart}
               cartPrice={this.props.cartPrice}
               updateQuandtity={this.props.updateQuandtity}
               removeFromCart={this.props.removeFromCart} />
             </tbody>
           </table>
           <div className="text-center">
              <Link className="btn btn-primary m-1" to="/shop">Continue Shoping </Link>
              <Link className={this.getLinkClasses()} to="/shop/checkout">Checkout</Link>
           </div>
        </div>
    }
}