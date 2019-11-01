import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sum from "./sum";
import dd, {sample} from "./another";

const message = "Component Element from const";
export default class App extends Component {
  render = () => (
    <div>
      <h4 className={this.getClassName(this.state.count)}>
        {message} {this.isEven()}
      </h4>
    </div>
  );

  test = () => {
    console.log(' testing ', sum());
  }

  isEven = () => (2 / 2 === 0 ? "even" : "odd");

  getClassName = val =>
    val % 2 === 0
      ? "bg-primary textx-white text-center p-2 m-1"
      : "bg-primary textx-white text-center p-2 m-1";

  
}
