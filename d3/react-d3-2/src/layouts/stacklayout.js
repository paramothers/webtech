import React, {Component} from 'react';
import {csvParse} from 'd3-dsv';
import {scaleLinear, scaleOrdinal} from 'd3-scale';
import {stack, area, stackOffsetSilhouette, stackOrderInsideOut, curveBasis} from 'd3-shape';
import {select} from 'd3-selection';

export default class StackAreaPlot extends Component{

    constructor(props){
        super(props);

        this.state = {}        
    }
    loadMoviesData = async () => {

        let response = await fetch('http://localhost:8080/data/movies.csv');
        let data = await response.text();
        let parsedCsv = csvParse(data);

        console.log('parsedCsv ', parsedCsv);
        this.setState({
            moviesData: parsedCsv
        })
    }

    drawStackedBarChart(){

        let xScale = scaleLinear()
                        .domain([0,10])
                        .range([0,500]);
        let yScale = scaleLinear()
                        .domain([0,60])
                        .range([480,0]);

        let heightScale = scaleLinear()
                        .domain([0,60])
                        .range([0,480]);

        let movies = ["titanic", "avatar", "akira", "frozen", "deliverance", "avengers"];
        let fillScale = scaleOrdinal()
                      .domain(movies)
                      .range(["#fcd88a", "#cf7c1c", "#93c464", "#75734F", "#5eafc6", "#41a368"])

        let stackLayout = stack()
                            .keys(movies);

                select(this.svgNode)
                    .selectAll('g.bar')
                    .data(stackLayout(this.state.moviesData))
                    .enter()
                    .append('g')
                    .attr('class','bar')
                    .each( function(d){

                        select(this)
                        .selectAll('rect')
                        .data(d)
                        .enter()
                        .append('rect')
                        .attr('x', (p,q) => xScale(q) + 30)
                        .attr('y', p => yScale(p[1]))
                        .attr('height', p => heightScale(p[1] - p[0]))
                        .attr('width', 40)
                        .style('fill', fillScale(d.key))
                    })



    }

    drawStackedGraph(){

       let xScale = scaleLinear()
                    .domain([0,10])
                    .range([0,500]);

       let yScale = scaleLinear()
                        .domain([-50,50])
                        .range([500,0]);
       let movies = ["titanic", "avatar", "akira", "frozen", "deliverance", "avengers"];

       let fillScale = scaleOrdinal()
                      .domain(movies)
                      .range(["#fcd88a", "#cf7c1c", "#93c464", "#75734F", "#5eafc6", "#41a368"])

       let stackLayout = stack()
                            .keys(movies)
                            .offset(stackOffsetSilhouette)
                            .order(stackOrderInsideOut);


       let stackArea = area()
                        .x( (d,i) => xScale(i))
                        .y0( d => yScale(d[0]))
                        .y1( d => yScale(d[1]))
                        .curve(curveBasis)

        select(this.svgNode)
        .selectAll('path')
        .data(stackLayout(this.state.moviesData))
        .enter()
        .append('path')
        .style('fill', d => fillScale(d.key))
        .attr('d', d => stackArea(d));

    }

    componentDidUpdate(){

        if(this.state.moviesData){
            // this.drawStackedGraph();
            this.drawStackedBarChart();
        }
    }

    componentDidMount(){
        this.loadMoviesData();
    }

    render(){

        return <svg width={this.props.size[0]}
            height={this.props.size[1]}
            ref={ (svg) => this.svgNode = svg}
            style={{border:'1px green solid'}}
        >

        </svg>

    }
}