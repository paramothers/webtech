import React, { Component } from "react";
import { ActionButton } from "./ActionButton";

export class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpan: false
    };
  }
  handleClidk = e => {
    this.setState({ showSpan: !this.state.showSpan });
    this.props.callback(e);
  };
  getMessageElement() {
    let divTemp = (
      <div id="messageDiv" className="h5 text-center p-2">
        {this.props.message}
      </div>
    );

    return this.state.showSpan ? <span>{divTemp}</span> : divTemp;
  }

  shouldComponentUpdate(newProps, newState) {
    let change = newProps.message !== this.props.message;
    if (change) {
      console.log(`shouldComponentUpdate ${this.props.text}: Update Allowed`);
    } else {
      console.log(`shouldComponentUpdate ${this.props.text}: Update Prevented`);
    }

    return change;
  }

  render() {
    console.log(`Render message Component`);
    return (
      <div>
        <ActionButton
          theme="primary"
          {...this.props}
          callback={this.handleClidk}
        />

        {this.getMessageElement()}
      </div>
    );
  }

  componentDidMount() {
    console.log("Component has been added to DOM. DOM has acknowledged !!");
  }

  componentDidUpdate() {
    console.log("Component has been updated !!");
  }
  componentWillUnmount() {
    console.log("Component going to destory @@@");
  }
}
