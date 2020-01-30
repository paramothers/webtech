import React, { Component } from "react";
import "../App.css";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { legendColor } from "d3-svg-legend";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;
    const dataMax = max(this.props.data);
    const barWidth = this.props.size[0] / this.props.data.length;

    const legend = legendColor()
      .scale(this.props.colorScale)
      .labels(["Wave 1", "Wave 2", "Wave 3", "Wave 4"]);

    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    const xScale = scaleLinear().range([0, this.props.size[0]]);

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .enter()
      .append("rect");

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .exit()
      .remove();

    select(node)
      .selectAll('g.legend')
      .data([0])
      .enter()
      .append('g')
      .append('g')
      .attr('class', 'legend')
      .call(legend)

    select(node)
    .select('g.legend')
    .attr('transform', 'translate('+ (this.props.size[0] - 100) +', 20)')


    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .style("fill", d => "#fe99" + d)
      .attr("x", (d, i) => xScale(i) * 25)
      .attr("y", d => this.props.size[1] - yScale(d))
      .attr("height", d => yScale(d))
      .attr("width", barWidth - 5)
      // .style('fill', (d, i) => this.props.colorScale(d.launchday))
      .style("stroke", "black")
      .style("stroke-opacity", 0.25);
  }

  render() {
    return (
      <svg
        width={this.props.size[0]}
        height={this.props.size[1]}
        ref={node => (this.node = node)}
      ></svg>
    );
  }
}
