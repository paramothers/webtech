import React, { Component } from "react";

import { pack } from "d3-hierarchy";
import { scaleOrdinal } from "d3-scale";
import { nest } from "d3-collection";
import { arc } from 'd3-shape';
import { hierarchy, tree, partition, treemap } from "d3-hierarchy";
import { select, selectAll, event } from "d3-selection";
import { zoom } from "d3-zoom";

export default class CirclePack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  drawTreeMap(){

    let depthScale = scaleOrdinal().range([
        "#5EAFC6",
        "#FE9922",
        "#93c464",
        "#75739F"
      ]);


    let treemapLayout = treemap()
                        .size([500,500])
                        .padding(d => d.depth* 5 +5)

    let partionData = treemapLayout(this.getTreeData());

    select(this.svgNode)
        .selectAll('rect')
        .data(partionData.descendants(), d => d.data.content || d.data.user || d.data.key)
        .enter()
        .append('rect')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .style('fill',  d => depthScale(d.depth))
        .style('stroke', 'black')
        .on('click', function(d){

            let newRoot = hierarchy(d.data, p => p.values)
                    .sum( p => p.retweets? p.retweets.length + p.favorites.length+1 : undefined)

            treemapLayout(newRoot);

            //append new rectangle
            select(this.svgNode)
                .selectAll('rect')
                .data(newRoot.descendants(), p => p.data.content || p.data.user || p.data.key)
                .enter()
                .append('rect')
                .style('fill', p => depthScale(p.depth))
                .style('stroke','black');

            //remove not used rectangle
            select(this.svgNode)
              .selectAll('rect')
              .data(newRoot.descendants(), p => p.data.content || p.data.user || p.data.key)
              .exit()
              .remove();
            

            select(this.svgNode)
                .selectAll('rect')
                .on('click', d === partionData ? p => this(p) :  () => this(partionData))
                .transition()
                .duration(1000)
                .attr('x', p => p.x0)
                .attr('y', p => p.y0)
                .attr('width', p => p.x1 - p.x0)
                .attr('height', p => p.y1 - p.y0)            
        })
      }

  drawParitionLayout() {

    let depthScale = scaleOrdinal().range([
        "#5EAFC6",
        "#FE9922",
        "#93c464",
        "#75739F"
      ]);

    let partitionLayout =  partition()
                            .size([2 * Math.PI, 250]);

    let partionData = partitionLayout(this.getTreeData());

    let arc2 = arc()
                .innerRadius( d => d.y0)
                .outerRadius( d => d.y1);

     select(this.svgNode)
      .append('g')
      .attr('transform', `translate(255,255)`)
      .selectAll('path')
      .data(partionData.descendants())
      .enter()
      .append('path')
      .attr('d', ({y0, y1, x0, x1}) => arc2({
          y0,y1,startAngle:x0, endAngle:x1
      }))
      .style('fill', d => depthScale(d.depth))
      .style('stroke', 'black')



/* 
    select(this.svgNode)
        .selectAll('rect')
        .data(partionData.descendants())
        .enter()
        .append('rect')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .style('fill', d => depthScale(d.depth))
        .style('stroke', 'black'); */

  }

  //this method return array, so that it can be easily used for translate
  project(x, y) {
    let angle = (x / 90) * Math.PI;
    let radius = y;
    return [radius * Math.cos(angle), radius * Math.sin(angle)];
  }

  getTreeData() {
    //nest (or) group the flat data accordingly
    let nestedTweets = nest()
      .key(d => d.user)
      .entries(this.state.tweets);

    //this packableTweets need for 'hierarchy' object
    let packableTweets = { id: "All Tweets", values: nestedTweets };

    // this create hierarchy structure for data and populate parent, d.x, d.y and d.depth
    let root = hierarchy(packableTweets, d => d.values).sum(d =>
      d.retweets ? d.retweets.length + d.favorites.length + 1 : undefined
    );
    return root;
  }

  drawRadialTree() {
    let depthScale = scaleOrdinal().range([
      "#5EAFC6",
      "#FE9922",
      "#93c464",
      "#75739F"
    ]);

    let treeChart = tree()
      //to make sure d.x and d.y should not beyond this 200, 200
      .size([200, 200]);

    //it again  converty tree into flat structure for sake of data() method
    let treeData = treeChart(this.getTreeData()).descendants();

    select(this.svgNode)
      //create one 'g' to represent the entire chart and transform to center of page.
      .append("g")
      .attr("id", "treeG")
      .attr("transform", "translate(250,250)")
      .selectAll("g")
      .data(treeData)
      .enter()
      //create individual 'g' and transform them accordingly
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${this.project(d.x, d.y)})`);

    //draw circle to represent for each node. Those 'g' alreay transfomred.
    selectAll("g.node")
      .append("circle")
      .attr("r", 10)
      .style("fill", d => depthScale(d.depth))
      .style("stroke", "white")
      .style("stroke-width", 2);

    console.log(treeData.filter(d => d.parent));

    //draw connecting line among circle
    select("#treeG")
      .selectAll("line")
      //execlude Leaf node
      .data(treeData.filter(d => d.parent))
      .enter()
      .insert("line")
      //set Attribute to line, but not 'g'
      .attr("x1", d => this.project(d.parent.x, d.parent.y)[0])
      .attr("y1", d => this.project(d.parent.x, d.parent.y)[1])
      .attr("x2", d => this.project(d.x, d.y)[0])
      .attr("y2", d => this.project(d.x, d.y)[1])
      .style("stroke", "black");
  }

  drawTree() {
    let depthScale = scaleOrdinal().range([
      "#5EAFC6",
      "#FE9922",
      "#93c464",
      "#75739F"
    ]);

    let nestedTweets = nest()
      .key(d => d.user)
      .entries(this.state.tweets);

    let packableTweets = { id: "All Tweets", values: nestedTweets };

    let root = hierarchy(packableTweets, d => d.values).sum(d =>
      d.retweets ? d.retweets.length + d.favorites.length + 1 : undefined
    );

    let treeChart = tree().size([
      this.props.size[0] - 120,
      this.props.size[1] - 120
    ]);

    let treeData = treeChart(root).descendants();

    select(this.svgNode)
      .append("g")
      .attr("id", "treeG")
      .attr("transform", "translate(60,20)")
      .selectAll("g")
      .data(treeData)
      .enter()
      .append("g")
      .attr("class", "node")
      // .attr('transform', d => `translate(${d.x}, ${d.y})`)
      .attr("transform", d => `translate(${d.y}, ${d.x})`);

    selectAll("g.node")
      .append("circle")
      .attr("r", 10)
      .style("fill", d => depthScale(d.depth))
      .style("stroke", "white")
      .style("stroke-width", 2);

    select("#treeG")
      .selectAll("line")
      .data(treeData.filter(d => d.parent))
      .enter()
      .insert("line", "g")
      .attr("x1", d => d.parent.y)
      .attr("y1", d => d.parent.x)
      .attr("x2", d => d.y)
      .attr("y2", d => d.x)
      .style("stroke", "black");

    selectAll("g.node")
      .append("text")
      .style("text-anchor", "middle")
      .style("fill", "#4f442b")
      .text(d => d.data.id || d.data.key || d.data.content);

    let zoom = zoom().on("zoom", function() {
      select("#treeG").attr(
        "transform",
        `translate(${event.transform.x},${event.transform.y})`
      );
    });

    select(this.svgNode).call(zoom);
  }

  drawCirclePack = () => {
    let depthScale = scaleOrdinal().range([
      "#5EAFC6",
      "#FE9922",
      "#93c464",
      "#75739F"
    ]);

    let nestedTweets = nest()
      .key(d => d.user)
      .entries(this.state.tweets);

    console.log("nestedTweets ", nestedTweets);
    let packableTweets = { id: "All Tweets", values: nestedTweets };

    let packChart = pack()
      .size([this.props.size[0] - 120, this.props.size[1] - 120])
      .padding(10);

    let root = hierarchy(packableTweets, d => d.values).sum(d =>
      d.retweets ? d.retweets.length + d.favorites.length + 1 : undefined
    );

    select(this.svgNode)
      .append("g")
      .attr("transform", `translate(10,120)`)
      .selectAll("circle")
      .data(packChart(root).descendants())
      .enter()
      .append("circle")
      .attr("r", d => d.r)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .style("fill", d => depthScale(d.depth))
      .style("stroke", "black");
  };

  componentDidUpdate() {
    if (this.state.tweets) {
      // this.drawCirclePack();
      // this.drawTree();
    //   this.drawRadialTree();
    //   this.drawParitionLayout();
      this.drawTreeMap();
    }
  }

  componentDidMount() {
    this.loadTweetData();
  }

  loadTweetData = async () => {
    let response = await fetch("http://localhost:8080/data/tweets.json");
    let data = await response.json();
    this.setState({
      tweets: data.tweets
    });
  };

  render() {
    return (
      <svg
        width={this.props.size[0]}
        height={this.props.size[1]}
        style={{ border: "1px green solid" }}
        ref={svg => (this.svgNode = svg)}
      ></svg>
    );
  }
}
