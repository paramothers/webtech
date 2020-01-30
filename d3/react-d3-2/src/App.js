import React, { Component } from "react";
import "./App.css";
import BarChart from "./barchart/BarChart";
import BasicShape from './misc/basicshape';
import { scaleThreshold } from "d3-scale";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 1000,
      screenHeight: 500
    };
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize, false);
    this.onResize();
  }

  onResize() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight - 70
    });
  }

  render() {
    const colorScale = scaleThreshold()
      .domain([5, 10, 20, 30, 50])
      .range(["#75739F", "#5EAFC6", "#41A368", "#93C464", "#FE9922"]);

    return (
      <div className="App">
        <div className="App-header">
          <h2>D3 Dashboard</h2>
        </div>
        <div>
         {/*  <BarChart
            data={[5, 10, 1, 3]}
            size={[this.state.screenWidth / 2, this.state.screenHeight / 2]}
            colorScale={colorScale}
          /> */}
          <BasicShape
           
            size={[500, 500]}
           
          />
        </div>
      </div>
    );
  }
}
