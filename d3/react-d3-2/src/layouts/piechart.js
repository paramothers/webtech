import React, { Component } from "react";
import { scaleOrdinal, scaleLinear } from "d3-scale";
import { select,selectAll } from "d3-selection";
import { pie, arc } from "d3-shape";
import { nest } from "d3-collection";
import { sum } from "d3-array";

export default class SimplePieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadTweets = async () => {
    let response = await fetch("http://localhost:8080/data/tweets.json");
    let data = await response.json();
    let tweets = data.tweets;
    console.log("tweets ", tweets);

    this.setState({
      tweets: tweets
    });
  };

  drawPieChart = () => {
    let nestedTweets = nest()
      .key(d => d.user)
      .entries(this.state.tweets);

    console.log(nestedTweets);

    nestedTweets.forEach(d => {
      d.numTweets = d.values.length;
      d.numFavorites = sum(d.values, p => p.favorites.length);
      d.numRetweets = sum(d.values, p => p.retweets.length);
    });

    let pieChart = pie()    
            .value(d => d.numTweets)
            .sort(null);


    let yourPie = pieChart(nestedTweets);

    let newArc = arc();
    newArc.innerRadius(50).outerRadius(100);

    let fillScale = scaleOrdinal()
                    .range([
                        "#fcd88a",
                        "#cf7c1c",
                        "#93c464",
                        "#75734F"
                      ]);

            select('svg')
                    .append('g')
                    .attr('transform','translate(250,250)')
                    .selectAll('path')
                    .data(yourPie)
                    .enter()
                    .append('path')
                    .attr('d', newArc )
                    .style('stroke','black')
                    .style('stroke-width', 2)
                    .style('fill', (d, i) => fillScale(i));

        // change the pie chart
        pieChart.value( d => d.numFavorites);
        selectAll('path')
        .data(pieChart(nestedTweets))
        .transition()
        .duration(1000)
        .attr('d', newArc); 

        // change the pie chart
      /*   pieChart.value(d => d.numRetweets);
        selectAll('path')
        .data(pieChart(nestedTweets))
        .transition()
        .duration(3000)
        .attr('d', newArc); */

  };

  drawPieChart2 = () => {
    let pieChart = pie();
    let yourPie = pieChart([1, 1, 2]);

    let newArc = arc();
    newArc.innerRadius(0).outerRadius(100);

    console.log(newArc(yourPie[0]));

    let fillScale = scaleOrdinal().range([
      "#fcd88a",
      "#cf7c1c",
      "#93c464",
      "#75734F"
    ]);

    select(this.svgNode)
      .append("g")
      .attr("transform", "translate(250,250)")
      .selectAll("path")
      .data(yourPie)
      .enter()
      .append("path")
      .attr("d", newArc)
      .style("fill", (d, i) => fillScale(i))
      .style("stroke", "black")
      .style("stroke-width", 2);
  };

  componentDidMount() {
    // this.drawPieChart();
    this.loadTweets();
  }

  componentDidUpdate() {
    if (this.state.tweets) {
      this.drawPieChart();
    }
  }

  render() {
    return (
      <svg
        height={this.props.size[1]}
        width={this.props.size[0]}
        style={{ border: "1px darkgreen solic" }}
        ref={svg => (this.svgNode = svg)}
      ></svg>
    );
  }
}
