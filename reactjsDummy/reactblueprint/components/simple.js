import React from 'react';
import {render} from 'react-dom';

const App = React.createClass({
    
    render(){
        return '<div> {this.props.greetings} </div>'
    },
    
    getDefaultProps() {
        return {
            greetings: ""
        }
    },
    
    

    setInitialState(){
        
        return {
            
        }
    }
})



render(<App greetings="Hello world" />, document.querySelector('#app'));