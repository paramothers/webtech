import React, { Component } from "react";
import "./App.css";
import BarChart from "./barchart/BarChart";
import BasicShape from "./misc/basicshape";
import ScatterPlot from "./scatterplot/ScatterPlot";
import FootBall from "./scatterplot/football";

import { scaleThreshold } from "d3-scale";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 1000,
      screenHeight: 500
    };
    this.onResize = this.onResize.bind(this);
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
      <div className="App container">

        <div className="App-header row">
          <h2>D3 Dashboard</h2>
        </div>
        <div className="row m-2">
          <FootBall size={[900, 300]} className='col'/>
          <div id="controls"></div>
        </div>
        <div className="row">
          {/*  <BarChart
            data={[5, 10, 1, 3]}
            size={[this.state.screenWidth / 2, this.state.screenHeight / 2]}
            colorScale={colorScale}
          /> */}
          {/*  <BasicShape
           
            size={[500, 500]}
           
          /> */}
          <p>Scattered Plot</p>
          <ScatterPlot size={[500, 500]}  class='col'/>
        </div>        
      </div>
    );
  }
}
