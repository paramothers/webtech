import React, { Component } from "react";

export default class ExecutionResultRender extends Component {
   /**
   * get usecase from props and pass to Get request.
   */
  /* componentDidMount() {
    this.executeCommand();
  }

  componentDidUpdate() {
    console.log("Load command result again for given ", this.props.useCase);
    this.executeCommand();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("***************");
    console.log("Need to update (object) ", this.props.useCase);
    console.log("Need to update (!)", !this.props.useCase);
    console.log("Need to update- next  (object) ",nextProps.useCase);
    console.log("Need to update -next (!)", !nextProps.useCase);
    console.log("Need to update (condition)", !this.props.useCase || nextProps.useCase !== this.props.useCase);
    return !nextProps.useCase || nextProps.useCase !== this.props.useCase;
  } */

  render() {
    return (
      <div id="resultRenderDiv">
        <pre>          
          <span>{this.props.serverOutput} </span>
        </pre>
      </div>
    );
  }
}
