import React, {Component} from 'react';
export default  class TodoBanner extends Component {

    //this is Class syntax.
    render = () =>
    <h4 className="bg-primary text-white text-center p-2">
        {this.props.name}'s Todo List ({this.props.tasks.filter(t => !t.done).length} items to do)
    </h4>

    // object litral syntax
    //render : () => {}

}