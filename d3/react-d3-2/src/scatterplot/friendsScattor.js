import React, { Component } from "react";
import { select, selectAll } from "d3-selection";
import { extent, min, max } from "d3-array";
import { scaleLinear } from "d3-scale";
import {axisRight, axisBottom} from 'd3-axis'; 

export default class FriendsScattor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scatterData: [
        { friends: 5, salary: 22000 },
        { friends: 3, salary: 18000 },
        { friends: 10, salary: 88000 },
        { friends: 0, salary: 218000 },
        { friends: 27, salary: 568000 },
        { friends: 8, salary: 748000 }
      ]
    };
  }

  componentDidMount() {
    this.createScatterPlot();
    this.createScatterPlot2();
  }

  componentDidUpdate() {
    this.createScatterPlot();
    this.createScatterPlot2();
  }
  createScatterPlot = () => {
    select(this.svgNode)
      .selectAll("circle")
      .data(this.state.scatterData)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("cx", (d, i) => i * 10)
      .attr("cy", d => d.friends);
  };

  createScatterPlot2 = () => {
    let xExtent = extent(this.state.scatterData, d => d.salary);
    let yExtent = extent(this.state.scatterData, d => d.friends);

  
    let xScale = scaleLinear()
      .domain(xExtent)
      .range([0, this.props.size[0]]);

    let yScale = scaleLinear()
      .domain(yExtent)
      .range([0, this.props.size[1]]);

    let yAxis = axisRight()
      .scale(yScale)
      .tickSize(670)
      .ticks(16);

    let xAxis = axisBottom()
                .scale(xScale)
                .tickSize(270)
                .ticks(4);


    select(this.svgNode2)
      .selectAll('circle')
      .data(this.state.scatterData)
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('cx', d => xScale(d.salary))
      .attr('cy', d => yScale(d.friends));

     select(this.svgNode2)
        .append('g')
        .attr('id', 'yAxisG')
        .call(yAxis);
    
    select(this.svgNode2)
      .append('g')
      .attr('id','xAxisG')
      .call(xAxis);
  };

  render() {
    return (
      <div>
        <svg
          style={{ border: "1px steelblue solid" }}
          width={this.props.size[0]}
          height={this.props.size[1]}
          ref={svg => (this.svgNode = svg)}
        ></svg>
        <br />
        <svg
          style={{ border: "1px steelblue solid" }}
          width={this.props.size[0]}
          height={this.props.size[1]}
          ref={svg => (this.svgNode2 = svg)}
        ></svg>
      </div>
    );
  }
}
