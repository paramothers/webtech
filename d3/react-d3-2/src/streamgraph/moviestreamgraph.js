import React, { Component } from "react";

import { select, selectAll } from "d3-selection";
import { csvParse } from "d3-dsv";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { line, curveCardinal, area, curveBasis } from "d3-shape";
import { axisBottom, axisRight } from "d3-axis";
import {legendColor} from 'd3-svg-legend';

export default class MovieStreamGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  loadMovieData = async () => {
    let result = await fetch("http://localhost:8080/data/movies.csv");
    let data = await result.text();
    let parsedData = csvParse(data);

    this.setState({
      movieData: parsedData
    });
  };

  simpleStacking(lineData, lineKey) {
    var newHeight = 0;
    Object.keys(lineData).every(key => {
      if (key !== "day") {
        newHeight += parseInt(lineData[key]);
        if (key === lineKey) {
          return false;
        }
      }
      return true;
    });
    return newHeight;
  }

  drawStackedArea() {
    let fillSCale = scaleOrdinal()
      .domain([
        "titanic",
        "avatar",
        "akira",
        "frozen",
        "deliverance",
        "avengers"
      ])
      .range([
        "#fcd88a",
        "#cf7c1c",
        "#93c464",
        "#75734F",
        "#5eafc6",
        "#41a368"
      ]);

    let xScale = scaleLinear()
      .domain([1, 8])
      .range([20, 470]);

    let yScale = scaleLinear()
      .domain([0, 55])
      .range([480, 20]);

    Object.keys(this.state.movieData[0]).forEach(key => {
      if (key != "day") {
        let movieArea = area()
          .x(d => xScale(d.day))
          .y0(d => yScale(this.simpleStacking(d, key) - d[key]))
          .y1(d => yScale(this.simpleStacking(d, key)))
          .curve(curveBasis);

        select(this.svgNode)
          .append("path")
          .attr("id", key + "Area")
          .attr("d", movieArea(this.state.movieData))
          .attr("fill", fillSCale(key))
          .attr("stroke", "black")
          .attr("stroke-width", 1);
      }
    });

    let legendA = legendColor()
                .scale(fillSCale);

        select(this.svgNode)
            .style('width','1000px');

        legendA.orient('horizontal')
            .shapePadding(60)
            .shapeWidth(12)
            .shapeHeight(30)

        select(this.svgNode)
            .append('g')
            .attr('transform', 'translate(500,0)')
            .call(legendA)

        
        
        


  }

  drawArea = () => {
    let xScale = scaleLinear()
      .domain([1, 8])
      .range([20, 470]);
    let yScale = scaleLinear()
      .domain([-40, 40])
      .range([480, 20]);

    Object.keys(this.state.movieData[0]).forEach(key => {
      if (key !== "day") {
        let movieArea = area()
          .x(d => xScale(d.day))
          .y0(d => yScale(d[key]))
          .y1(d => yScale(-d[key]))
          .curve(curveCardinal);

        select(this.svgNode)
          .append("path")
          .attr("id", key + "Area")
          .attr("d", movieArea(this.state.movieData))
          .style("fill", "#75739F")
          .style("stoke", "#75739F")
          .style("stroke-width", 2)
          .style("stroke-opacity", 0.75)
          .style("fill-opacity", 0.5);
      }
    });
  };

  drawStreamGraph = () => {
    const xScale = scaleLinear()
      .domain([1, 8])
      .range([20, 470]);

    const yScale = scaleLinear()
      .domain([0, 40])
      .range([480, 20]);

    const xAxis = axisBottom()
      .scale(xScale)
      .tickSize(-500);

    // pass the g-group element to Axis function.
    select(this.svgNode)
      .append("g")
      .attr("id", "xAxisG")
      .attr("transform", `translate(0,490)`)
      .call(xAxis);

    Object.keys(this.state.movieData[0]).forEach(key => {
      if (key !== "day") {
        // create line
        let movieArea = line()
          .x(d => xScale(d.day))
          .y(d => yScale(d[key]))
          .curve(curveCardinal);

        // add line to path element.
        select(this.svgNode)
          .append("path")
          .attr("id", key + "Area")
          .attr("d", movieArea(this.state.movieData))
          .attr("fill", "none")
          .attr("stroke", "#75739F")
          .attr("stroke-width", 3)
          .style("opacity", 0.75);
      }
    });
  };

  componentDidMount() {
    this.loadMovieData();
  }
  componentDidUpdate() {
    if (this.state.movieData) {
      //   this.drawStreamGraph();
    //   this.drawArea();
    this.drawStackedArea();
    }
  }

  render() {
    return (
      <svg
        height={this.props.size[1]}
        width={this.props.size[0]}
        style={{ border: "1px streelblue solid" }}
        ref={svg => (this.svgNode = svg)}
      ></svg>
    );
  }
}
