import React, { Component } from "react";

import { select, selectAll } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { axisBottom } from "d3-axis";
import { histogram } from "d3-array";

export default class HistogramLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadTweetsdata = async () => {
    let response = await fetch("http://localhost:8080/data/tweets.json");
    let data = await response.json();
    console.log(data.tweets);
    this.setState({
      tweetsData: data.tweets
    });
  };

  drawHistogram = () => {
    const xScale = scaleLinear()
      .domain([0, 5])
      .range([0, 500]);

    const yScale = scaleLinear()
      .domain([0, 10])
      .range([400, 0]);

    const xAxis = axisBottom()
      .scale(xScale)
      .ticks(5);

    let histoChart = histogram();

    histoChart
      .domain([0, 5])
      .thresholds([0, 1, 2, 3, 4, 5])
      .value(d => d.favorites.length);

    let that = this;
    function retweet() {
      histoChart.value(d => d.retweets.length);
      let histoData = histoChart(that.state.tweetsData);

      selectAll("rect")
        .data(histoData)
        .transition()
        .duration(500)
        .attr("x", d => xScale(d.x0))
        .attr("y", d => yScale(d.length))
        .attr("height", d => 400 - yScale(d.length));
    }
    let histoFormatedData = histoChart(this.state.tweetsData);

    console.log("bin:: ", histoFormatedData);

    select(this.svgNode)
      .selectAll("rect")
      .data(histoFormatedData)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.x0))
      .attr("y", d => yScale(d.length))
      .attr("width", d => xScale(d.x1 - d.x0) <= 0 ? 0: xScale(d.x1 - d.x0)-2)
      .attr("height", d => 400 - yScale(d.length))
      .on("click", () => {
        retweet();
      })
      .style("fill", "#FCD88B");

    select(this.svgNode)
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0,400)")
      .call(xAxis);

    select("g.axis")
      .selectAll("text")
      .attr("dx", 50);
  };

  componentDidMount() {
    this.loadTweetsdata();
  }
  componentDidUpdate() {
    if (this.state.tweetsData) {
      this.drawHistogram();
    }
  }

  render() {
    return (
      <svg
        width={this.props.size[0]}
        height={this.props.size[1]}
        ref={svg => (this.svgNode = svg)}
        style={{ border: "1px lime solid" }}
      ></svg>
    );
  }
}
