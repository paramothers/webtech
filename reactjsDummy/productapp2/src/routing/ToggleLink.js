import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";

// this ToggleLink, return a <Route> compenent based on routing system Instead of declarativly
// So, always a Route compoment return something to dispaly based on routing system
export class ToggleLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doRedirect: false
    };
  }

  handleClick = () => {
    this.setState({ doRedirect: true }, () =>
      this.setState({ doRedirect: false })
    );
  };
  handleClick2 = history => {
    history.push(this.props.to);
  };

  //we use <Route> component, since based on current routing details, we want to diplay link with backgraoudn color.
  // we can access that routing system information thought <Route> element only.
  render() {
    return (
      <Route
        path={this.props.to}
        exact={this.props.exact}
        children={routerProps => {
          const baseClasses = this.props.className || "m-2 btn btn-block";
          const activeClass = this.props.activeClass || "btn-primary";
          const inActiveClass = this.props.inActiveClass || "btn-secondary";
          const combinenedClases = `${baseClasses} ${
            routerProps.match ? activeClass : inActiveClass
          }`;

          return <React.Fragment>
            {
              this.state.doRedirect && <Redirect to={this.props.to} />
            }
            <button
              to={this.props.to}
              className={combinenedClases}
              onClick={() => this.handleClick()}
            >
              {this.props.children}
            </button>
            </React.Fragment>
        }}
      ></Route>
    );
  }
}
