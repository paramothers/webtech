import React, { Component } from "react";
import { startCreatingProduct } from "../store/actionCreators/stateActionsCreators";
import { resetStore } from "./reducer/customReducerEnhancer";

export class StoreAccess extends Component {
  constructor(props) {
    super(props);
    //awesome coding... it is kind of Java-Reflection
    this.selectors = {
      product: storeData => storeData.modelData.products[0],
      state: storeData => storeData.stateData
    };
    this.state = this.selectData();
    this.buttonRef = React.createRef();
  }

  dispatchAction = () => {
    //   this.props.store.dispatch(startCreatingProduct())
    this.buttonRef.current.disabled = true;
    this.props.store
      .dispatchAync(resetStore())
      .then(data => (this.buttonRef.current.disabled = false));
    // this.props.store.dispatch(resetStore())
  };

  render() {
    return (
      <React.Fragment>
        <div className="text-center">
          <button
            onClick={this.dispatchAction}
            ref={this.buttonRef}
            className="btn btn-primary m-1"
          >
            Dispatch Action
          </button>
        </div>
        <div className="bg-info">
          <pre className="text-white">
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </div>
      </React.Fragment>
    );
  }

  selectData() {
    let storeData = this.props.store.getState();
    return Object.entries(this.selectors)
      .map(([k, v]) => [k, v(storeData)])
      .reduce((result, [k, v]) => ({ ...result, [k]: v }), {});
  }

  handleDataStoreChange() {
    let newData = this.selectData();
    Object.keys(this.selectors)
      .filter(key => this.state[key] !== newData[key])
      .forEach(key => this.setState({ [key]: newData[key] }));
  }

  componentDidMount() {
    this.unsubscriber = this.props.store.subscribe(() =>
      this.handleDataStoreChange()
    );
  }

  componentWillUnmount() {
    this.unsubscriber();
  }
}
