import React, { Component } from "react";
import { ProModeContext } from "./ProModeContext";

export class ProModeToggle extends Component {
  static contextType = ProModeContext;
  render2() {
    return (
      <ProModeContext.Consumer>
        {contextData => (
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              value={contextData.proMode}
              onChange={contextData.toggleProMode}
            />
            <label className="form-check-label">{this.props.label}</label>
          </div>
        )}
      </ProModeContext.Consumer>
    );
  }

  render() {
    return (
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={this.context.proMode}
          onChange={this.context.toggleProMode}
        />
        <label className="form-check-label">{this.props.label}</label>
      </div>
    );
  }
}
