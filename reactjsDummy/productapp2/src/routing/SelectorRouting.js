import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
  Redirect, 
  withRouter,
  Prompt
} from "react-router-dom";
import { ProductDisplay } from "../product/ProductDisplay";
import { SupplierDisplay } from "../supplier/SupplierDisplay";
import {RouteInfo} from "../routing/RouteInfo";
import {ToggleLink} from "../routing/ToggleLink";
import {CustomPrompt} from "../routing/CustomPrompt";

const RouteInfoHOC = withRouter(RouteInfo);

export class Selector extends Component {

  constructor(props){
    super(props);
    this.state = {
      showPrompt: false,
      message: "",
      callback: () =>{}
    }
  }

  customGetUserConfirmation = (message, navCallback) => {
    this.setState({
      showPrompt: true,
      message: message,
      callback: (allow) => {
        navCallback(allow);
        this.setState({showPrompt: false})
      }
    })
  }

  renderMessage = msg => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>;

  render(){
    /**
     * the first column of <div> are rendered programatically based routing system
     * second, part of <Route> are rendred declarativly
     */
    return <Router getUserConfirmation={ this.customGetUserConfirmation}>
        <div className="container-fluid">
            <div className="row">
       
                <div className="col-2">
                    <ToggleLink className="m-2 btn btn-block btn-primary" activeClassName="active" to="/products">Product</ToggleLink>
                    <ToggleLink className="m-2 btn btn-block btn-primary" activeClassName="active" to="/suppliers">Suppliers</ToggleLink>
                    <ToggleLink className="m-2 btn btn-block btn-primary" activeClassName="active" to="/info/match">Match</ToggleLink>
                    <ToggleLink className="m-2 btn btn-block btn-primary" activeClassName="active" to="/info/location">Location</ToggleLink>
                    <ToggleLink className="m-2 btn btn-block btn-primary" activeClassName="active" to="/info">All Info</ToggleLink>
                </div>
                <div className="col">
                   <CustomPrompt show={this.state.showPrompt}
                   message={this.state.message}
                   callback={this.state.callback} />
                  <Prompt message={ (loc) => `Do you want to navigate to ${loc.pathname}`} />
                    <RouteInfoHOC />
                    <Switch>
                        <Route path="/products" component={ProductDisplay} />
                        <Route path="/suppliers" component={SupplierDisplay} />
                        <Route path="/info/:datatype?" component={RouteInfo} />
                        <Redirect  to="/products" />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
  }

  render5() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <NavLink to="/" className="m-2 btn btn-block btn-primary" activeClassName="active" exact={true}>
                Default URL
              </NavLink>
              <NavLink to="/products" className="m-2 btn btn-block btn-primary" activeClassName="active" exact={true}>
                Products
              </NavLink>
              <Link to="/suppliers" className="m-2 btn btn-block btn-primary" exact={true}>
                Suppliers
              </Link>
              <Link to="/old/data" className="m-2 btn btn-block btn-primary" exact={true}>
                Old Link
              </Link>
            </div>
            <div className="col">
              <Switch>
                <Route path="/products" component={ProductDisplay} />
                <Route path="/suppliers" component={SupplierDisplay} />
                <Redirect from="/old/data" to="/suppliers" />
                <Redirect to="/products" />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }

  render3() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div>
                <Link to="data/one">Link #1</Link>
              </div>
              <div>
                <Link to="data/two">Link #2</Link>
              </div>
              <div>
                <Link to="people/bob">Bob</Link>
              </div>
            </div>
            <div className="col">
              <Route
                path={["/data", "/data/one", "/people/bob"]}
                render={() => this.renderMessage("Router #1")}
                exact={true}
              />
              <Route
                path={["/data", "/people"]}
                render={() => this.renderMessage("Router #2")}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
  render2() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div>
                <Link to="/products">Products</Link>
              </div>
              <div>
                <Link to="/suppliers">Supplier</Link>
              </div>
            </div>
            <div className="col">
              <Route
                path="/products"
                render={routerProps => <ProductDisplay myProp="myValue" />}
              />
              <Route
                path="/suppliers"
                render={routerProps => (
                  <React.Fragment>
                    <h4 className="bg-info text-center text-white p-2">
                      Suppliers
                    </h4>
                    <SupplierDisplay />
                  </React.Fragment>
                )}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
