import React, {Component} from 'react';

export default class TodoCreator extends Component{

    constructor(props){

        super(props);
        this.state = {
            newItemText:""
        }
    }

    updateNewItemText = (event) => this.setState({
        newItemText: event.target.value
    })

    createNewTodo = () => {

        this.props.callback(this.state.newItemText);
        this.setState({newItemText:""});
    }
    render = () => 
        <div className="my-1">
          <input className="form-control" 
               value={this.state.newItemText}
               onChange={this.updateNewItemText}
          />
          <button onClick={this.createNewTodo}
                   className="btn btn-primary mt-1">Add</button>
        </div>
   
}