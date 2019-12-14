import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";
import { ToggleLink } from "./ToggleLink";
import { CustomPrompt } from "./CustomPrompt";
import { RoutedDisplay } from "./RoutedDisplay";
import {IsolatedTable} from "../common/IsolatedTable";
import {IsolatedEditor} from "../common/IsolatedEditor";
import { RequestError} from "../webservices/RequestError";

export class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPrompt: false,
      message: "",
      callback: () => {}
    };
  }
  customGetUserConfirmation = (message, navCallback) => {
    this.setState({
      showPrompt: true,
      message: message,
      callback: allow => {
        navCallback(allow);
        this.setState({ showPrompt: false });
      }
    });
  };
  render() {
    const routes = React.Children.map(this.props.children, child => ({
      component: child,
      name: child.props.name,
      url: `/${child.props.name.toLowerCase()}`,
      datatype: child.props.datatype
    }));

    return (
      <Router getUserConfirmation={this.customGetUserConfirmation}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <ToggleLink to="/isolated">Isolated Data</ToggleLink>
              {routes.map(r => (
                <ToggleLink key={r.url} to={r.url}>
                  {r.name}
                </ToggleLink>
              ))}
            </div>
            <div className="col">
              <Switch>
                <Route path="/isolated" component={IsolatedTable}  exact={true}/>
                <Route path="/isolated/:mode/:id?" component={IsolatedEditor} />
                <Route path="/error/:message" component={RequestError} />
                {routes.map(r => {

                  console.log(`routes rendered` );
                  return (
                    <Route
                      key={r.url}
                      path={`/:datatype(${r.datatype})/:mode?/:id?`}
                      component={RoutedDisplay(r.datatype)}
                    />
                  );
                })}
                <Redirect to={routes[0].url} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
