import React, { Component } from "react";
import {extent, max} from 'd3-array';
import {scaleTime, scaleLinear} from 'd3-scale';
import {select , selectAll} from 'd3-selection';
import {colorbrewer} from 'colorbrewer'; 

export default class ScatterPlot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:null
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/data/tweets.json")
        .then(data => data.json())
        .then(result => {
            console.log(result); 
            this.setState({
                data: result.tweets
            }); 
        });
    }

    componentDidUpdate() {
        this.createScatterPlot();
    }

    createScatterPlot() {
        if(this.state.data){

            let tweetsData = this.state.data;
            tweetsData.forEach( d => {

                d.impact = d.favorites.length + d.retweets.length;
                d.tweetTime = new Date(d.timestamp);
            });
                let maxImpact = max(tweetsData,  d => d.impact);
                let startAndEnd = extent(tweetsData, d => d.tweetTime);
                let timeRampScale = scaleTime()
                                .domain(startAndEnd)
                                .range(20, this.props.size[0]);
                let yScale = scaleLinear()
                                .domain([0, maxImpact])
                                .range([0, this.props.size[1]]); 
                let radiusScale = scaleLinear()
                                    .domain([0, maxImpact])
                                    .range([1, 20]);
                let colorScale = scaleLinear()
                                    .domain([0, maxImpact])
                                    .range(['white', '#75739F']);

                select(this.svgNode)
                .selectAll('circle')
                .data(tweetsData)
                .enter()
                .append('circle')
                .attr('r', d => radiusScale(d.impact))
                .attr('cx', d => timeRampScale(d.tweetTime))
                .attr('cy', d => this.props.size[1] - yScale(d.impact))
                .style('fill', d => colorScale(d.impact))
                .style('stroke', 'black')
                .style('stroke-width','1px');

            
        }
    }

    render() {
        return (
            <svg
                width={this.props.size[0]}
                height={this.props.size[1]}
                style={{'border':'1px steelblue solid'}}
                ref={svgNode => (this.svgNode = svgNode)}
            ></svg>
        );
    }
}
