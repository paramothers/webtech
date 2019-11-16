import React, { Component } from "react";
import { ThemeButton } from "./ThemeButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Ready",
      counter: 0,
      theme: "secondary"
    };
  }
  handleClick = event => {
    console.log(
      `App: Type: ${event.type} ` +
        `Target: ${event.target.tagName} ` +
        `CurrentTarget: ${event.currentTarget.tagName}`
    );
  };
  selectTheme = newTheme => {
    this.setState({
      theme: newTheme,
      message: `Theme: ${newTheme}`
    });
  };

  toogleCheckbox = event => {
    if (this.state.counter === 0) {
      event.preventDefault();
    }
  };

  handleEvent = (event, theme) => {
    /* if(event.type === "mousedown"){
       this.setState({message: "Down"});
    }else{
      this.setState({message: "Up"});
    } */
    //this.setState({message: `cliked - ${event.nativeEvent} - ${event.target} - ${event.timeStamp} - ${event.isTrusted}`});

    event.persist();
    this.setState(
      {
        counter: this.state.counter + 1,
        theme: theme
      },
      () => this.setState({ message: `${event.type}: ${this.state.counter}` })
    );
  };

  render() {
    return (
      <div className="m-2" onClick={this.handleClick}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={this.toogleCheckbox}
          />
          <label>This is a checkbox</label>
        </div>
        <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
          {this.state.message}
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={e => this.handleEvent(e, "primary")}
          >
            Normal
          </button>
          <button
            className="btn btn-primary"
            onClick={e => this.handleEvent(e, "danger")}
          >
            Click Me
          </button>
        </div>
        <div className="text-center" onClick={this.handleClick}>
          <ThemeButton theme="primary" callback={this.selectTheme} />
          <ThemeButton theme="danger" callback={this.selectTheme} />
        </div>
      </div>
    );
  }
}
