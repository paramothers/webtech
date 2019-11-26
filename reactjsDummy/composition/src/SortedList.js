import React, { Component } from "react";
import { GeneralList } from "./GeneralList";
import { ActionButton } from "./ActionButton";
import { ErrorBoundary } from "./ErrorBoundary";

export class SortedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soft: false
    };
  }

  getList() {
    return this.state.sort ? [...this.props.list].sort() : this.props.list;
  }

  toggleSort = () => {
    this.setState({ sort: !this.state.sort });
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <GeneralList list={this.getList()} theme="info" />
          <div className="text-center m-2">
            <ActionButton
              theme="primary"
              text="Sort"
              callback={this.toggleSort}
              proMode={this.props.proMode}
            />
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
