import React, {Component} from 'react';

import {scaleOrdinal, scaleLinear} from 'd3-scale';
import {randomNormal} from 'd3-random';
import {range, histogram} from 'd3-array';
import {axisRight} from 'd3-axis';
import {area, curveCatmullRom} from 'd3-shape';
import {select, selectAll} from 'd3-selection';

export default class ViolinPlot extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){

        let fillScale = scaleOrdinal()
                        .range(["#fcd88a", "#cf7c1c", "#93c464"]);

        let normal = randomNormal()
        let sampleData1 = range(100)
                            .map(d => normal());
        let sampleData2 =  range(100)
                            .map(d => normal());
        let sampleData3 = range(100)
                            .map(d => normal());

        let histoChart = histogram()
                        .domain([-3,3])
                        .thresholds([-3,-2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5,2,2.5,3])
                        .value(d => d);

        let yScale = scaleLinear()
                        .domain([-3,3])
                        .range([400,0]);

        let yAxis = axisRight()
                    .scale(yScale)
                    .tickSize(300);

            select(this.svgNode)
                .append('g')
                .call(yAxis);

        let areav = area()
                  .x0(d => -d.length)
                  .x1(d => d.length)
                  .y( d => yScale(d.x0))
                  .curve(curveCatmullRom)

         select(this.svgNode)
         .selectAll('g.violin')
         .data([sampleData1, sampleData2, sampleData3])
         .enter()
         .append('g')
         .attr('class','violin')
         .attr('transform', (d,i) => `translate(${50+i*100}, 0)`)
         .append('path')
         .style('stroke','black')     
         .style('fill', (d,i) => fillScale(i))
         .attr('d', d => areav(histoChart(d)))    


    }

    render(){
       return  <svg height={this.props.size[1]}
        width={this.props.size[0]}
        style={{border:'1px darkgreen solic'}}
        ref = { svg => this.svgNode = svg}>

        </svg>
    }

}