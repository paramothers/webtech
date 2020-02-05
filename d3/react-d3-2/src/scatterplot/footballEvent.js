import React, {Component} from 'react';
import {csvParse} from 'd3-dsv';
import {select, selectAll} from 'd3-selection';

export default class FootBallWithEvents extends Component {

    constructor(props){

        super(props);
        this.state = {
            footBallData:null
        }
    }

    render(){

        return <svg 
        style={{border:'1px steelblue solid'}}
        width={this.props.size[0]}
        height={this.props.size[1]}
        ref = { (svg) => this.svgNode = svg}
        >
        </svg>
    }

    componentDidMount(){

        fetch('http://localhost:8080/data/worldcup.csv')
        .then(result => result.text())
        .then( data => {

            this.setState({
                footBallData:csvParse(data);
            });
            this.renderSvgElements();
        })
    }

    renderSvgElements(){

        if(this.state.footBallData){
            select(this.svgNode)
            .attr()
        }

    }
}