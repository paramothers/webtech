import React, { Component } from "react";
import './d3ia.css';

import { select, selectAll } from "d3-selection";
import { csvParse } from "d3-dsv";
import { max } from "d3-array";
import { scaleLinear, scaleOrdinal, scaleQuantize } from "d3-scale";
import { rgb } from "d3-color";
import { transition } from "d3-transition";
import {colorbrewer} from 'colorbrewer';
import {html} from 'd3-fetch';
import {schemeCategory10 } from 'd3-scale-chromatic';
import {values} from 'd3-collection';
import {interpolate, interpolateHsl, interpolateHcl, interpolateLab} from 'd3-interpolate'

export default class FootBall extends Component {

  teamClick = d => selectAll('td.data')
                    .data(values(d))
                    .html( p => p)

  buttonClick2 = attribute => {

      let maxValue = max(this.state.footBallData, d => parseFloat(d[attribute]));


      let colorQuantizeScale = scaleQuantize()
                        .domain([0, maxValue])
                        .range(colorbrewer.Blues[3]);

      let radiusScale = scaleLinear()
                        .domain([0, maxValue])
                        .range([2, 20]);

                  selectAll('g.overallG')
                  .select('circle')
                  .transition()
                  .duration(1000)
                  .style('fill', d => colorQuantizeScale(d[attribute]))
                  .attr('r', d => radiusScale(d[attribute]))

  }

  buttonClick = attribute => {

    let maxValue = max(this.state.footBallData, d => parseFloat(d[attribute]));
    console.log('maxValue ', maxValue)
    let radiousScale = scaleLinear()
      .domain([0, maxValue])
      .range([2, this.radius]);

    let tenColorScale = scaleOrdinal()
                        .domain(["UEFA", "CONMEBOL"])
                        // .domain(['"UEFA", "CONMEBOL", "CAF", "AFC"'])
                        .range(schemeCategory10)
                        .unknown("#c4b9ac");

    let yScale = scaleLinear()
                  .domain([0, maxValue])
                  // .interpolate(interpolateHsl)
                  // .interpolate(interpolateHcl)
                  .interpolate(interpolateLab)
                  .range(['blue','yellow'])
                  
    selectAll("g.overallG")
      .select("circle")
      .transition()
      .duration(1000)
      .attr("r", d => radiousScale(d[attribute]))
      .style('fill', d => tenColorScale(d.region))
      // .style('fill', d => yScale(d[attribute]))
  };

  hightlightRegion(d, index, actualNode) {
    
    let teamColor = rgb("red");
    select(actualNode)
      .select("text")
      .classed("active", true)
      .attr("y", 10);

    selectAll("g.overallG")
      .select("circle")
      .style("fill", p =>
        p.region === d.region
          ? teamColor.darker(0.85)
          : teamColor.brighter(0.5)
      );

    actualNode.parentElement.appendChild(actualNode);
  }


  hightlightRegionByClass(d, index, actualNode) {
    select(actualNode)
      .select("text")
      .classed("active", true)
      .attr("y", 10);

    selectAll("g.overallG")
      .select("circle")
      .each(function(p) {
        p.region === d.region
          ? select(actualNode).classed("active", true)
          : select(actualNode).classed("inactive", true);
      });

    actualNode.parentElement.appendChild(actualNode);
  }

  unHighlight() {

    selectAll("g.overallG")
      .select("circle")
      .style('fill', '#75739F')
      .attr("class", "");

    selectAll("g.overallG")
      .select("text")
      .classed("active", false)
      
      .attr("y", 30);
  }

  radius = 20;

  constructor(props) {
    super(props);
    this.state = {
      footBallData: null
    };
  }

  render() {
    return (
      <svg
        style={{ border: "1px steelblue solid " }}
        width={this.props.size[0]}
        height={this.props.size[1]}
        ref={svg => (this.svgNode = svg)}
      ></svg>
    );
  }

  componentDidMount() {
    fetch("http://localhost:8080/data/worldcup.csv")
      .then(result => result.text())
      .then(data => {
        console.log("footBall data", csvParse(data));
        this.setState({
          footBallData: csvParse(data)
        });
        this.overalTeamViz();
      });

    fetch('http://localhost:8080/data/infobox.html')
       .then( result => result.text())
       .then(data => {

           select('body')
            .append('div')
            .attr('id', 'infobox')
            .html(data);
       })
  }

  overalTeamViz() {
    if (this.state.footBallData) {
      select(this.svgNode)
        .append("g")
        .attr("id", "teamsG")
        .attr("transform", "translate(50,50)")
        .selectAll("g")
        .data(this.state.footBallData)
        .enter()
        .append("g")
        .attr("class", "overallG")
        .attr("transform", (d, i) => "translate(" + i * 100 + ",0)");

      let teamG = selectAll("g.overallG");

      teamG.append("circle").attr("r", this.radius);

      teamG
        .append("text")
        .attr("y", 30)
        .attr("x", 0)
        .text(d => d.team);

      const attributes = Object.keys(this.state.footBallData[0]).filter(
        attrbutte => attrbutte !== "team" && attrbutte !== "region"
      );

      select("#controls")
        .selectAll("button.teams")
        .data(attributes)
        .enter()
        .append("button")
        .on("click", (d,i, nodes) => {

          console.log('df,',d);
          console.log('if,',i);
          console.log('nodef,',nodes);
          this.buttonClick(d)
        })
        .html(d => d);

      /* teamG
            .append('circle')
            .attr('r',0)
            .transition()
            .delay((d,i) =>  i* 100)
            .duration(500)
            .attr('r', 40)
            .transition()
            .duration(500)
            .attr('r',20) */

      teamG.on("mouseover", (dataTum, index, nodes) => {
        this.hightlightRegion(dataTum, index, nodes[index]);
      });

      teamG.on("mouseout", this.unHighlight);
      teamG.on('click', (data, i, nodes) => this.teamClick(data))
    }
  }
}
