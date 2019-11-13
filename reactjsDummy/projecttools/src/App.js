/* eslint-disable*/

import React, { Component } from "react";
import "./App.css";
import {Display} from "./Display";

let name = "Admin";
const city = "Chennai";
//eslint-disable-next-line
let error = "thsi is";
export default class App extends Component {

  constructor(props){
             
    super(props);
    this.state = {
      city:"London"
    }
  }
  changeCity = () => {
    debugger;
    this.setState({city: this.state.city === "London"? "New yark": "London"})
  }

  message = () => `Hellow ${name} from ${city}`;
  render(){
    return (
      <Display value={this.state.city} callback={this.changeCity}/>
    )
  }
}
