
import React, {Component} from 'react';
import {select, selectAll} from 'd3-selection';
import {sankey} from 'd3-sankey';
import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array';


export default class SankeyLayout extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return <svg width={this.props.size[0]}
                height={this.props.size[1]}
                style={{border:'2px blue solid'}}
                ref = { svg => this.svgNode = svg}>

        </svg>
    }
    loadSiteState = async () => {

        let response = await fetch('http://localhost:8080/data/sitestate.json')
        let data = await response.json();
        this.setState({
            siteData: data
        });
    }

    componentDidMount(){
        this.loadSiteState();
    }

    componentDidUpdate(){
        if(this.state.siteData){
            this.drawSankeyLayout();
        }
    }

    drawSankeyLayout(){

        let sankeyLayout = sankey()
                    .nodeWidth(20)
                    .nodePadding(200)
                    .size([460,460])
                    .nodes(this.state.siteData.nodes)
                    .links(this.state.siteData.links)
                    // .layout(200);

        let intensityRamp = scaleLinear()
                            .domain([0, max(this.state.siteData.links, d => d.value)])
                            .range(["#fcd88b", "#cf7d1c"]);

                    select(this.svgNode)
                        .append('g')
                        .attr('transform','translate(20,20)')
                        .attr('id','sankeyG');

                    select('#sankeyG')
                    .selectAll('.link')
                    .data(this.state.siteData.links)
                    .enter()
                    .append('path')
                    .append('class', 'link')
                    .attr('d', sankeyLayout.links())

                    .style('stroke-width', d => d.day)
                    .style('stroke-opacity', .5)
                    .style('stroke', d => intensityRamp(d.value))

                    .style('fill', 'none')
                    .sort( (a,b) => b.dy - a.dy)
                    .on('mouseover', function(){
                        select(this)
                            .style('stroke-opacity', .8);
                    })


                    selectAll('path.link')
                        .style('stroke-opacity', 0.5)


                    select('#sankeyG')
                        .selectAll('.none')

                        .data(this.state.siteData.nodes)
                        .enter()
                        .append('g')

                        .attr('class','node')
                        .attr('transform',d => `translate(${d.dx}, ${d.dy})`)

                  selectAll('.none')
                    .append('rect')
                    .attr('height', d => d.dy)
                    .attr('width', 20)
                    .style('fill', '#93c464')
                    .style('stroke','gray')

                  selectAll('.node')
                    .append('text')
                    .attr('dx',0)
                    .attr('dy', d => d.dy)
                    .attr('text-anchor', 'middle')
                    .style('fill', 'black')
                    .text(d => d.name)



           }

}