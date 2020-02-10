import React, { Component } from "react";

import { select } from "d3-selection";
import { csvParse } from "d3-dsv";
import { scaleLinear } from "d3-scale";
import { axisBottom, axisRight } from "d3-axis";
import { line, curveBasis, curveStep,  curveCardinal } from "d3-shape";

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadData = async () => {
    let result = await fetch("http://localhost:8080/data/tweetdata.csv");
    let rawData = await result.text();

    let parsedData = csvParse(rawData);
    console.log(`Data from server ${parsedData}`);
    this.setState({
      lineData: parsedData
    });
  };

  drawLineGraph(xScale, yScale) {

    let drawLine = line()
      .x(d => xScale(d.day))
      .y(d => yScale(d.tweets));

      drawLine.curve(curveBasis);

    select(this.svgNode)
      .append("path")
      .attr("d", drawLine(this.state.lineData))
      .attr('fill', 'none')
      .attr('stroke','#fe9a22')
      .attr('stroke-width', '2px');
  }


  drawLineGraphForRetweets(xScale, yScale){

    let drawLine = line()
                .x( d => xScale(d.day))
                .y( d => yScale(d.retweets))
        drawLine.curve(curveCardinal);
        
        select(this.svgNode)
            .append('path')
            .attr('d', drawLine(this.state.lineData))
            .attr('fill','none')
            .attr('stroke','#5eaec5')
            .attr('stroke-width','2px')
  }

  drawLineChart = () => {
    const blue = "#5eaec5",
      green = "#92c463",
      orange = "#fe9a22";

    const xScale = scaleLinear()
      .domain([1, 10.5])
      .range([20, 480]);

    const yScale = scaleLinear()
      .domain([0, 35])
      .range([480, 20]);

    const xAxis = axisBottom()
      .scale(xScale)
      .tickSize(480)
      .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    select(this.svgNode)
      .append("g")
      .attr("id", "xAxisG")
      .call(xAxis);

    const yAxis = axisRight()
      .scale(yScale)
      .ticks(10)
      .tickSize(480);

    select(this.svgNode)
      .append("g")
      .attr("id", "yAxisG")
      .call(yAxis);

    select(this.svgNode)
      .selectAll("circle.tweets")
      .data(this.state.lineData)
      .enter()
      .append("circle")
      .attr("class", "tweets")
      .attr("r", 0)
      .attr("cx", d => xScale(d.day))
      .attr("cy", d => yScale(d.tweets))
      .style("fill", blue);

    select(this.svgNode)
      .selectAll("cirlce.retweets")
      .data(this.state.lineData)
      .enter()
      .append("circle")
      .attr("class", "retweets")
      .attr("r", 5)
      .attr("cx", d => xScale(d.day))
      .attr("cy", d => yScale(d.retweets))
      .style("fill", green);

    select(this.svgNode)
      .selectAll("circle.favorites")
      .data(this.state.lineData)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("class", "favorites")
      .attr("cx", d => xScale(d.day))
      .attr("cy", d2 => {
        console.log(`favorites: ${d2["favorites"]}`);
        yScale(parseFloat(d2["favorites"]));
      })
      .style("fill", orange);

      this.drawLineGraph(xScale, yScale);
      this.drawLineGraphForRetweets(xScale, yScale);
  };

  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate() {
    if (this.state.lineData) {
      this.drawLineChart();
    }
  }

  render() {
    return (
      <svg
        style={{ border: "1px steelblue solid" }}
        width={this.props.size[0]}
        height={this.props.size[1]}
        ref={svg => (this.svgNode = svg)}
      ></svg>
    );
  }
}
