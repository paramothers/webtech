import React, {Component} from 'react';

export default class VisibilityControl extends Component{

    render = () => 
        <div className="form-check">
            <input className="form-check-input"
                   checked={this.props.isChecked}
                   type="checkbox"
                   onChange={ (e) => this.props.callback(e.target.checked)} />
            <label className="form-check-label">Show {this.props.description}</label>
        </div>
    
} 