import React, { Component } from "react";
export class ThemeButton extends Component {
  handleClick = (e, capturePhase = false) => {
    console.log(`Theme Button : Type: ${e.type}
         Target: ${e.target.tagName} 
         CurrentTarget: ${e.currentTarget.tagName}`);
    if (capturePhase) {
        if(this.props.theme === "danger"){
           e.stopPropagation();
           console.log("Stopped event");
        }
      console.log("Skipped function prob: capture phase");
    } else if (e.bubbles && e.currentTarget !== e.target) {
      console.log("Skipped function prob: bubble phase");
    } else {
      console.log("Invocked function prop");
      this.props.callback(this.props.theme);
    }
  };

  render() {
    return (
      <span
        className="m-1"
        onClick={this.handleClick}
        onClickCapture={e => this.handleClick(e, true)}
      >
        <button
          className={`btn btn-${this.props.theme}`}
          onClick={this.handleClick}
        >
          Select {this.props.theme} Theme
        </button>
      </span>
    );
  }
}
