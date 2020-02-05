import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PocContainer from "./client/PocContainer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: "",
      useCases: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/usecase.json").then(res => {
      const data = res.data;
      console.log("useCases from ", data);
      this.setState({ useCases: data.usecases });
    });
  }

  render() {
    if (this.state.useCases.length > 0) {
      return <PocContainer useCases={this.state.useCases} />;
    } else return null;
  }
}
