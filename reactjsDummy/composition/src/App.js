import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ActionButton } from "./ActionButton";
import { Message } from "./Message";
import { ThemeSelector } from "./ThemeSelector";

import { GeneralList } from "./GeneralList";
import { SortedList } from "./SortedList";
// import { ProFeature } from "./ProFeature";
import { ProController } from "./ProController";
import { LogToConsole } from "./LogToConsole";
import { ProFeature } from "./ProFeature";
import { ProModeContext } from "./ProModeContext";
import { ProModeToggle } from "./ProModeToggle2";

const ProList = ProController(
  LogToConsole(SortedList, "Sorted", true, true, true)
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      names: ["zoe", "param", "pavalan", "padhu", "parithi"],
      cities: ["London", "New York", "Paris", "Milan", "Boston"],
      // proMode: false
      proContextData: {
        proMode: false,
        toggleProMode: this.toggleProMode
      },
      superProContextData: {
        proMode: false,
        toggleProMode: this.toggleSuperMode
      }
    };
  }

  toggleSuperMode = () => {
    this.setState( state => state.superProContextData.proMode = !state.superProContextData.proMode);
  }

  toggleProMode = () => {
    this.setState(
      state => (state.proContextData.proMode = !state.proContextData.proMode)
    );
  };

  /*  toggleProMode = () => {
    this.setState({ proMode: !this.state.proMode });
  }; */

  incrementCounter = () => this.setState({ counter: this.state.counter + 1 });

  /*  render() {
    return (
      <div className="m-2 text-center">
        <ThemeSelector>
          <Message
            theme="primary"
            message={`Counter : ${this.state.counter}`}
          ></Message>
          <ActionButton
            theme="primary"
            callback={this.incrementCounter}
            text="Incrment"
          />
        </ThemeSelector>
      </div>
    );
  } */

  /*  render(){
    return <div className="container-fluid">
         <div className="row">
            <div className="col-6">
               <GeneralList list={this.state.names} theme="primary"/>
            </div>
            <div className="col-6">
                <SortedList list={this.state.names} />
            </div>
         </div>
    </div>
  } */

  render2() {
    return (
      <div className="container-fluid">
        {/* <div className="row">
          <div className="col-12 text-center p-2">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value={this.state.proMode}
                onChange={this.toggleProMode}
              />
              <label className="form-check-label">Pro Mode</label>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-3">
            <GeneralList list={this.state.names} theme="primary" />
          </div>
          <div className="col-3">
            <ProList list={this.state.names} />
          </div>
          <div className="col-3">
            <GeneralList list={this.state.cities} theme="secondary" />
          </div>
          <div className="col-3">
            <ProList list={this.state.cities} />
          </div>
        </div>
      </div>
    );
  }

  render3() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center p-2">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value={this.state.proMode}
                onChange={this.toggleProMode}
              />
              <label className="form-check-label">Pro Mode</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <GeneralList list={this.state.names} theme="primary" />
          </div>
          <div className="col-6">
            {/* <ProFeature
              pro={this.state.proMode}
              render={text => (
                <React.Fragment>
                  <h4 className="text-center">{text}</h4>
                  <SortedList list={this.state.names} />
                </React.Fragment>
              )} */}
            <SortedList list={this.state.names} proMode={this.state.proMode} />
          </div>
        </div>
      </div>
    );
  }
  render5() {
    return (
      <div className="container-fluid">
        <ProModeContext.Provider value={this.state.proContextData}>
          <div className="row">
            <div className="col-12 text-center p-2">
              <ProModeToggle label="Pro Mode" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <GeneralList list={this.state.names} theme="primary" />
            </div>
            <div className="col-6">
              <SortedList list={this.state.names} />
            </div>
          </div>
        </ProModeContext.Provider>
      </div>
    );
  }

  render(){
    return (
      <div className="container-fluid">
         <div className="row">
             <div className="col-6 text-center p-2">
                <ProModeContext.Provider value={this.state.proContextData}>
                   <ProModeToggle label="Pro Mode" />
                </ProModeContext.Provider>
             </div>
             <div className="col-6 text-center p-2">
                <ProModeContext.Provider value={this.state.superProContextData} >
                   <ProModeToggle  label="Super Pro Mode" />
                </ProModeContext.Provider>
             </div>
         </div>
         <div className="row">
            <div className="col-6">
               <ProModeContext.Provider value={this.state.proContextData}>
                     <SortedList list={this.state.names} />
               </ProModeContext.Provider>
            </div> 
            <div className="col-6">
                <ProModeContext.Provider value={this.state.superProContextData}>
                    <SortedList list={this.state.cities} />
                </ProModeContext.Provider>
            </div> 
         </div>
      </div>
    )
  }
}
