import React, {Component} from 'react';

export default class SimpleButton extends Component {

    constructor(props){

        super(props);
        this.state = {
            counter:0,
            hasButtonBeenClicked: false
        }
    }

    render = () => {

        <button onClick={this.handleClick}
                className={this.props.className}
                disabled={this.props.disabled === "true" || this.props.disabled === true}>
            {this.props.text} {this.state.counter}
            {
                this.props.hasButtonBeenClicked &&
                <div>Button Clicked</div>
            }
        </button>

    }

    handleClick = () => {
        this.setState({
            counter : this.state.counter
        }, () => this.setState({hasButtonBeenClicked: this.state.counter > 0}));

        this.props.callback();
    }
}