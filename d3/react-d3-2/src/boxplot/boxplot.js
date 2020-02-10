import React, {Component} from 'react';

import {select, selectAll} from 'd3-selection';
import {scaleLinear} from 'd3-scale';
import {axisRight, axisBottom} from 'd3-axis';
import {csvParse} from 'd3-dsv';

export default class BoxPlot extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    loadBoxData = async () => {

       try{
        let result = await fetch('http://localhost:8080/data/boxplot.csv');
        let data = await result.text();

        this.setState({
            boxPlotData : csvParse(data)
        });
        
        console.log('boxData ', csvParse(data));
       }catch(error){
           console.log('error ',error)
       }

    }

    renderBoxPlot = () => {


        let tickSize = 470;
        const xScale = scaleLinear()
                        .domain([1,8])
                        .range([20, tickSize])
        const yScale = scaleLinear()
                        .domain([0,100])
                        .range([tickSize+10, 20])

        const yAxis = axisRight()
                        .scale(yScale)
                        .ticks(8)
                        .tickSize(-tickSize)

        select(this.svgNode)
            .append('g')
            .attr('transform',`translate(${tickSize},0)`)
            .attr('id','yAxisG')            
            .call(yAxis)

        const xAxis = axisBottom()
                      .scale(xScale)
                      .tickSize(-tickSize)
                      .tickValues([1,2,3,4,5,6,7])

            select(this.svgNode)
                .append('g')
                .attr('transform', `translate(0, ${tickSize})`)
                .attr('id', 'xAxisG')
                .call(xAxis);

            select('#xAxisG > path.domain')
                .style('display','none');

        select(this.svgNode)
            .selectAll('circle.median')
            .data(this.state.boxPlotData)
            .enter()
            .append('circle')
            .attr('class','tweets')
            .attr('r',5)
            .attr('cx', d => xScale(d.day))
            .attr('cy', d => yScale(d.median))
            .style('fill', 'darkgray')

        select(this.svgNode)
            .selectAll('g.box')
            .data(this.state.boxPlotData)
            .enter()
            .append('g')
            .attr('class', 'box')
            .attr('transform', d=>`translate(${xScale(d.day)}, ${yScale(d.median)} )`)
            .each( function(d, i) {

                select(this)
                .append('rect')
                .attr('width', 20)
                .attr('height', yScale(d.q1) - yScale(d.q3))
                .attr('x', -10)
                .attr('y', yScale(d.q3) - yScale(d.median))
                .style('fill', 'white')
                .style('stroke','black');

                select(this)
                .append('line')
                .attr('class','range')
                .attr('x1',0)
                .attr('x2',0)
                .attr('y1', yScale(d.max) - yScale(d.median))
                .attr('y2', yScale(d.min) - yScale(d.median))
                .style('stroke','black')
                .style('storke-width','4px');

                select(this)
                .append('line')
                .attr('class','max')
                .attr('x1', -10)
                .attr('x2', 10)
                .attr('y1', yScale(d.max) - yScale(d.median))
                .attr('y2', yScale(d.max) - yScale(d.median))
                .style('stroke','black')
                .style('stroke-width','4px')

                select(this)
                .append('line')
                .attr('x1', -10)
                .attr('x2', 10)
                .attr('y1', yScale(d.min) - yScale(d.median))
                .attr('y2', yScale(d.min) - yScale(d.median))
                .style('stroke','black')
                .style('stroke-width', '4px')

                select(this)
                .append('rect')
                .attr('class','range')
                .attr('width',20)
                .attr('x', -10)
                .attr('y', yScale(d.q3) - yScale(d.median))
                .attr('height', yScale(d.q1) - yScale(d.q3))
                .style('fill','white')
                .style('stroke', 'black')
                .style('stroke-width','2px')

                select(this)
                .append('line')
                .attr('x1', -10)
                .attr('x2',10)
                .attr('y1',0)
                .attr('y2',0)
                .style('stroke','darkgray')
                .style('stroke-width','4px')
            })
    }

    componentDidMount(){
        this.loadBoxData();
       
    }

    componentDidUpdate(){
        
        if(this.state.boxPlotData){
            this.renderBoxPlot();
        }
    }
    render(){

        return <svg 
                style={{border:'1px steelblue solid'}}
                height={this.props.size[1]}
                width={this.props.size[0]}
                ref={ (svg) => this.svgNode = svg}>
        </svg>
    }
}