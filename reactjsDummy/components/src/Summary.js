import React, { Component } from "react";
import { HooksButton } from "./HooksButton";
import { SimpleButton } from "./SimpleButton";

export class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCountetByValue = increment => {
    this.setState(state => {
      return { counter: this.state.counter + increment };
    });
  };

  render() {
    const props = this.props;
    return (
      <>
        <td>{props.index + 1}</td>
        <td>{props.name}</td>
        <td>{props.name.length}</td>
        <td>
          <SimpleButton
            className="btn btn-warning btn-sm m-1"
            callback={props.reverseCallback}
            text={`Reverse (${props.name})`}
            counter={this.state.counter}
            incrementCallback={this.incrementCountetByValue}
          />
          <HooksButton
            className="btn btn-info btn-sm m-1"
            callback={() => props.promoteCallback(props.name)}
            text={`Promote (${props.name})`}
            counter={this.state.counter}
            incrementCallback={this.incrementCountetByValue}
          />
        </td>
      </>
    );
  }
}
