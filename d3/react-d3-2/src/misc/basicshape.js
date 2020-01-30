import React, {Component} from 'react';
import {select} from 'd3-selection';
import {line} from 'd3-shape';

export default class BasicShape extends Component{

    render(){

        return <div>
            <svg 
            width={this.props.size[0]} 
            height={this.props.size[1]}
            ref= { node => this.node = node}>
                <path d=' M 10 25                
                          L 10 75
                          H 60 
                          L 10 25'
                
                />

                <path d = '
                    M 10, 80
                    C 10 80 50 200  90 80
                '

                transform='translate(20, 75)'
                
                />


            </svg>
        </div>
    }

    componentDidMount(){
        // this.createRectangle();
        // this.createGroupElement();
        this.createPathElement();
    }

    componentDidUpdate(){
        // this.createRectangle();
    }

    createPathElement(){

        let lineData = [
            {'x':1, 'y':5},
            {'x':40, 'y':10},
            {'x':60, 'y':40},
            {'x':80, 'y':5},
            {'x':100, 'y':60},
            {'x':100, 'y':80},
            {'x':200, 'y':60},
        ];

        let lineFunction = line()
                            .x( d => d.x)
                            .y( d => d.y)
                            // .interpolate('linear')

        let svgNode = this.node;
            select(svgNode)
                .append('path')
                .attr('d', lineFunction(lineData))
                .attr('stroke', 'blue')
                .attr('stroke-width', 2)
                .attr('fill','none')
                .on('click', () => alert('hai param') );
/* 
                select(svgNode)
                .select('path')
                .transition()
                .delay(1000)
                .attr('stroke','red') */
        
    }
    createRectangle(){
        let svgNode = this.node;

        select(svgNode)
        .append('rect')
        .attr('x', 33)
        .attr('y', 54)
        .attr('height', 100)
        .attr('width', 100)
        .style('fill', 'blue')

        // svgNode.current.style('fill','gray')

    }

    createGroupElement(){

        let svgNode = this.node;

        select(svgNode)
            .append('g')
            .attr('transition','translate(30,30)')
            .append('circle')
            .attr('cx', 50)
            .attr('cy',50)
            .attr('r',20);

          

        select(svgNode)
            .select('g')
            .append('text')
            .text('this is circle label')
            .attr('color','red')
    }

}